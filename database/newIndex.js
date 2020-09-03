const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//Connectin URL
const url = "mongodb://localhost:27017";

//Database name
const dbName = "SDC";

// GET function
MongoClient.connect()

function getFunction(company, material, color, product, callback) {
  MongoClient.connect(url, { useUnifiedTopology: true }, { poolSize: 20 }, function (err, client) {
    assert.equal(null, err);
    let db = client.db(dbName);
    //console.log("DB successfully connected");

    db.collection("data").findOne({ company: company, material: material, color: color, product: product }, (findErr, result) => {
      if (findErr) {
        throw findErr;
      }
      callback(null, result);
    })
  })
}

module.exports = {
  getFunction
}