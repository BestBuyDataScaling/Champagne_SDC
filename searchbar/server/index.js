const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!')
});

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
  // console.log(query);
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});