const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const db = mongoose.connect('mongodb://localhost/tilesKart');

var tileRouter = require('./routers/tileRouter');

app.use('/api',tileRouter);

app.listen(port, () => {
  console.log(`running port  ${port}`);
});
