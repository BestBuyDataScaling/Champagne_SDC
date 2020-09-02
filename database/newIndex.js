const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//Connectin URL
const url = "mongodb://localhost:27017";

//Database name
const dbName = "SDC";

// GET function

function getFunction(company, material, color, product, callback) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    assert.equal(null, err);
    console.log("DB successfully connected");
    let db = client.db(dbName);

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