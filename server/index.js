const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index');
<<<<<<< HEAD
=======
const { saveToDatabase } = require('../database/index');
var MongoClient = require('mongodb').MongoClient;
const newDB = require('../database/newIndex');
require('newrelic');
>>>>>>> de088cdb11db0e03075d576937e0227fa49184ac

const PORT = 3001;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')))
app.use(express.json());
app.use(cors());

// should get all products
app.get('/products', (req, res) => {
  db.Product.find({}, (err, results) => {
    if (err) {
      console.log(`Error retrieving all products ${err}`);
    } else {
      console.log(`Success getting all products from db`)
      res.send(results);
    }
  });
})

// should get relevant items based on client query
app.get('/products/:query', (req, res) => {
  let query = req.params.query;
<<<<<<< HEAD
  db.Product.find({ $text: { $search: query } } ,
  (err, results) => {
    if (err) {
      console.log(`Error retrieving all products ${err}`);
    } else {
      console.log(`Success getting related products from db`)
      res.send(results);
    }
  });
})

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
=======
  db.Product.find({ $text: { $search: query } },

    (err, results) => {
      if (err) {
        console.log(`Error retrieving all products ${err}`);
      } else {
        console.log(`Success getting related products from db`)
        res.send(results);
      }
    });
})

app.get('/products/:company/:material/:product/:color', (req, res) => {
  let company = req.params.company;
  let material = req.params.material;
  let product = req.params.product;
  let color = req.params.color;

  newDB.getFunction(company, material, product, color, (err, results) => {
    if (err) {
      console.log("error with new DB function")
    } else {
      res.send(results)
    }
  })
});

// db.data.find({ company: company, material: material, color: color, product: product },
//   (err, results) => {
//     if (err) {
//       console.log("Error with split_data db");
//     } else {
//       res.send(results);
//     }
//   });
//});

// creates new item
app.post('/products/:id/:name', (req, res) => {
  let id = req.params.id;
  let name = req.params.name;
  let product = { uniqueID: id, name: name }

  db.saveToDatabase(product, (err, results) => {
    if (err) {
      console.log("error saving to database")
    } else {
      res.send(results)
    }
  })
})
//

// updates one item
app.put('/products/:id/:name', (req, res) => {
  let id = req.params.id;
  let name = req.params.name;
  let product = { uniqueID: id, name: name }
  db.Product.updateOne({ uniqueID: id }, product, (err, results) => {
    if (err) {
      console.log("error overwriting data")
    } else {
      res.send(results)
    }
  })
})


// deletes one item
app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  db.Product.deleteOne({ uniqueID: id }, (err, results) => {
    if (err) {
      console.log("error overwriting data")
    } else {
      res.send(results)
    }
  })
})


// app.listen(PORT, () => {
//   console.log(`Server listening at ${PORT}`);
// });
>>>>>>> de088cdb11db0e03075d576937e0227fa49184ac


