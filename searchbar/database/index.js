const mongoose = require('mongoose');
const mock = require('./mockData');
mongoose.connect('mongodb://localhost/bestbuy', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Hello from the Database!');

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

  let Product = mongoose.model('Product', productSchema);

  let saveToDatabase = (model) => {
    let product = new Product({
      uniqueID: model.uniqueID,
      name: model.name,
      description: model.description,
      brand: model.brand,
      department: model.department,
      color: model.color,
      subDept: model.subDept,
      sku: model.sku,
      price: model.price,
      avgRating: model.avgRating,
      colors: model.colors,
      reviews: [],
      questions: {
        question: model.questions.question,
        answer: model.questions.answer
      },
      images: model.images,
      peopleAlsoBought: [],
      peopleAlsoViewed: [],
      recentlyViewed: model.recentlyViewed
    });
    product.save();
    console.log(`Created ${model.uniqueID}`)
  }

  let promiseData = mock.data.map(async (product) => {
    return product
  })

  Promise.all(promiseData)
  .then((products) => {
    products.map((product) => {
      saveToDatabase(product);
    })
  })
  .catch(err => {
    console.log(`Error saving product to database: ${err}`)
  })

  module.exports.Product = Product;
})