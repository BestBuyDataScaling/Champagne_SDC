const express = require('express');
const path = require('path');
const cors = require('cors');
// const db =

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')))
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});

