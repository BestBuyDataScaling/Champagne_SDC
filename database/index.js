const mongoose = require('mongoose');
const mock = require('./mockData');
mongoose.connect('mongodb://localhost/SDC', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


const productSchema = mongoose.Schema({
  uniqueID: Number,
  name: String,
})

// enable text index in schema for search query
productSchema.index({ name: 'text' })

let Product = mongoose.model('Product', productSchema);

let saveToDatabase = (model, callback) => {
  Product.findOne({ uniqueID: model.uniqueID }, (err, data) => {
    if (err) {
      console.log("DB ERROR", err);
    }
    if (data) {
      console.log("ALREADY IN DB")
    } else {
      let product = new Product({
        uniqueID: model.uniqueID,
        name: model.name,
      });
      product.save((err, data) => {
        if (err) {
          callback(err, null)
        } else {
          callback(null, data)
        }
      });
    };
    console.log(`Created ${model.uniqueID}`)
  })
}

// let promiseData = mock.data.map(async (product) => {
//   return product
// })

// Promise.all(promiseData)
//   .then((products) => {
//     products.map((product) => {
//       saveToDatabase(product);
//     })
//   })
//   .catch(err => {
//     console.log(`Error saving product to database: ${err}`)
//   })

module.exports = {
  Product,
  saveToDatabase
}