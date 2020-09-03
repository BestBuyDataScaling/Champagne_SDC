var express = require('express');
var mongodb = require('mongodb');
var app = express();
require('newrelic');

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true }, function (err, database) {
  if (err) throw err;

  db = database.db("SDC");

  // Start the application after the database connection is ready
  app.listen(3001);
  console.log("Champagne index listening on port 3001");
});

// Reuse database object in request handlers
app.get("/products/:company/:material/:color/:product", function (req, res) {
  let company = req.params.company;
  let material = req.params.material;
  let product = req.params.product;
  let color = req.params.color;

  console.log("params", req.params)
  db.collection("data").findOne({ company: company, material: material, color: color, product: product }, function (err, result) {
    if (err) {
      console.log("PROBLEM WITH DB", err);
    }
    else {
      console.log(result)
      res.send(result);
    }
  });
});