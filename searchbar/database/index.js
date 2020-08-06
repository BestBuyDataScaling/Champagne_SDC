const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const { Schema } = mongoose;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected to database!')

  const productSchema = mongoose.Schema({
    uniqueID: Number,
    name: String,
    description: String,
    brand: String,
    department: String,
    color: String,
    subDept: String,
    sku: Number,
    price: Number,
    avgRating: Number,
    colors: [],
    reviews: Array,
    questions: { question: String, answer: String },
    images: [],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: Boolean
  })

  // export function to create productModel class
  const ProductModel = mongoose.model('ProductModel', productSchema);
  module.exports = ProductModel;

});