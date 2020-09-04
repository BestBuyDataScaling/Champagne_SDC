<h1>Overall Goals:</h1>


1. Spin up two database options and compare performance against 10 million records.
1. Experiment with various server configurations to achieve at least 10,000 requests per second for static files.
1. Design a structure that would support such an application.

<h3>August 25th, 2020</h3>

*Challenge:*

**Getting started.**

*Action:*

* Set up team trello
* Forked and cloned legacy repo
* establishing enviroment
* Team norms


<h3>August 26th, 2020</h3>

*Challenge:*

**Setting up CRUD routes and exploring legacy code.**
**Researching differnet DBs to compare for this project.**

*Action:*

* Decided on the best way to use the legacy MongoDB to finish off RESTful API and CRUD routes
* Talked legacy owner about how her server routes worked
* Had dialogue on text indexing and searching in mongoDB using mongoose
* Decided to compare legacy mongoDB against Postgres
	* Wanted SQL vs noSQL comparison
	* Wanted to learn a new DBMS in Postgres
* Began setting up CRUD routes in mongoDB

*Results/Takaways:*
GET and POST routes done
Made decision on DB's
Adjusted schema for legacy DB for easier handling of POST requests


<h3>August 27th, 2020</h3>

*Challenge:*

**Finishing up CRUD routes**
**Understanding how to seed a database with 10M items at a reasonable pace.**

*Action:*

* Used the Mongoose docs to finish U and D with relative ease from the work put in yesterday
* Learned that Mongoose is relatively slow because of model validation
* Read up on Postgress
	* Open source, scalable, SQL
* Installed Mongo compass / PG admin 4
* Installed npm package ‘faker’ to create unique products that match legacy schema
* Planed out how to load a .csv into each to seed db

** Approach 1 **
try to make a csv file and import using compass
		Discovered csv-writer/Csv-write-stream

*Results/Takaways:*
Turns out this approach is limited by the physical memory used by the pipe method of writing to the file system
Tried splitting the function up into smaller chunks but closing the pipe is permanent and causes write errors.  Need to find a different solution
Finished CRUD


<h3>August 28th, 2020</h3>

*Challenge:*

**Getting 10M in the database without a pipe issue exceeding memory**
**Installing postgres**

*Action:*

* Tons of research on writing to disk without exceeding memory
**Approach 1a**
Writing a large amount of data to a csv file using Node’s drain event
Success! (write time: 8:42, file size: 352.3MB)

* Used the Mongo GUI to seed the db with 10M items (~10mins)
* Set up and installed postgres with Homebrew
* Began eye testing db searches in mongo shell using .find() (~5min)

*Results/Takaways:*
10M items now in a .csv file
Theres more than likely a way to get approach 1A to work with using async/await, need to revisit later
Searching documents in the mongo shell is painfully slow (~5min based on eye test)


<h3>August 29th, 2020</h3>

*Challenge:*

**Seeding Postgres DB**
**Executing queries for both DB's in less than 50ms**

*Action:*

* Used pgAdmin to seed the data.csv file made earlier (24 seconds!)
* Realized data wasn’t specific enough, refactored the csv maker file to include more random data sets
* Looked into Create Index for mongoDB

*Results/Takaways:*
Did a lot of searching for how to either optimize or measure queries but as of now coming up empty
Making a text index for mongo seemed to do the trick, but search of multiple columns is still linear time


<h3>August 31st, 2020</h3>

*Challenge:*

**Optimize keyword search**

*Action:*

* Tried using wild card index, regex search, and ensureIndex(). Didn’t improve search times
* Refactored schema to include more columns that can be indexed
* Had some success with compound indexing of new schema

*Results/Takaways:*
Compound indexing seems to be the best approach for this use case
$ db.split_data.createIndex({ company: 1, material: 1, color: 1, product: 1})
$ db.split_data.find({ company: "Schmitt Group", material: "Granite", color: "sky blue", product: "Shoes"}) => near constant lookup time
This approach is not elastic, and requires exact matches in exact order


<h3>September 1st, 2020</h3>

*Challenge:*

**Optimize keyword search**
**Researching how to measure DB queries**

*Action:*

* Talked to mentor, agreed I was trying to do to much, so now I’m scaling back the scope of the db search to be exact matches from the get request, with some schema refactoring
* Used .explain() to pull relevant search data
* Used compound indexing to get reliable matches in 9ms
* Connected GET request from server to local MongoDB
* Ran postman requests with a variance between 13ms and 82ms for search

*Results/Takaways:*
It is difficult to determine what is and is not important when considering a real word application of this exercise when it comes to these searches
Reliable round trip GET request within an acceptable margin to move into load testing


<h3>September 2nd, 2020</h3>

*Challenge:*

**Finding reliable metrics on load testing**

*Action:*

* Based on the time remaining, decided to pause comparison of postgres for now and focus on load testing mongo since search times were well within optimal ranges
* Decided on and Installed k6 using brew
* Signed up for app.k6.io
* Used testbuilder to make a custom script to load-test local server
* Ran first load test on server with 20 virtual users and had an issue after about a minute
* Researched client pooling
* Implemented client pooling on the mongo js file

*Results/Takaways:*
Server crashed under load after about 60 secs and 20 virtual users
Need to research all these new errors!


<h3>September 2nd, 2020</h3>

*Challenge:*

**Testing server load**

*Action:*

* Used the MongoDB docs to research connection pooling, updated server index file
* Moved MongClient.connect() function outside of individual requests
* Reset New Relic updating new server config
* Ran tests of 5m intervals with 50,100, 250, 500, 1000, 2000 VU’s
* Spun up proxy server and connected to service

*Results/Takaways:*
50 VU’s = 44.5 rps / throughput 2.97k rpm
100 VU’s = 89 rps / throughput 5.96k rpm
250 VU’s = 223 rps/ throughput 15k rpm
500 VU’s = 321 rps/ throughput 25.6k rpm
1000 VU’s = 515 rps/ throughput 45.4k rpm
2000 VU’s = Failure at 1231 VU’s
Last test battery: 3x @ 1500 VU’s
Success @ 813/s
Success @ 815/s
Success @ 810/s

Retrying 2000 = Success @ 1222/s
Summary:

![Test 1](/images/server.png)


<h3>September 4th, 2020</h3>

*Challenge:*

**Handle Proxy server routes**
**Load test proxy server**

*Action:*

* Install axios and route proxy requests to the service port
* Install k6 testing and new relic on the proxy repo
* Stress test proxy


*Results/Takaways:*
Initial tests confirm routes are successful
500 VU’s = 230/s “context deadline exceeded” @ max load
500 Vu’s = 232/s throughput 20.8k rpm
1000 VU’s = 302/s “context deadline exceeded” @ max load
1000 VU’s = 294/s “context deadline exceeded” @ max load

![Test 2](/images/proxy.png)

<h3>Conclusion:</h3>
Based on relevant data the proxy is significantly impacting load times and should be refactored, sadly we're out of time on this project