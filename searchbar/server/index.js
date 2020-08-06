const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});