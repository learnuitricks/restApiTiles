const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const db = mongoose.connect('mongodb://localhost/tilesKart');
const Tile = require('./models/tileModel');

var tileRouter = require('./routers/tileRouter')(Tile);

app.use('/api',tileRouter);

app.listen(port, () => {
  console.log(`running port  ${port}`);
});
