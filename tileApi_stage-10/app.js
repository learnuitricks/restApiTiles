const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const db = mongoose.connect('mongodb://localhost/tilesKart');
const Tile = require('./models/tileModel');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var tileRouter = require('./routers/tileRouter')(Tile);

app.use('/api',tileRouter);

app.listen(port, () => {
  console.log(`running port  ${port}`);
});
