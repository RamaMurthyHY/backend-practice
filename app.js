const express = require('express');
const app = express();
require('dotenv').config()

const { PORT } = process.env
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});