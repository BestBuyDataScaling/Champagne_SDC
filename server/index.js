const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index');
const { saveToDatabase } = require('../database/index');

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
  db.Product.find({ $text: { $search: query } },
    (err, results) => {
      if (err) {
        console.log(`Error retrieving all products ${err}`);
      } else {
        //console.log(`Success getting related products from db`)
        res.send(results);
      }
    });
})

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


app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});


