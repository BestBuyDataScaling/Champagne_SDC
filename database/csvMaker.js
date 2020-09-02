const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const { data } = require('./mockData');


const writeProducts = fs.createWriteStream('./split_data.csv');
writeProducts.write('id,company,material,color,product\n', 'utf8');

function writeTenMillionProducts(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const company = faker.name.lastName()
      const material = faker.commerce.productMaterial()
      const color = faker.commerce.color()
      const product = faker.commerce.product()
      const data = `${id},${company},${material},${color},${product}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}


//writeTenMillionProducts(writeProducts, 'utf-8', () => {
//   writeProducts.end();
// });