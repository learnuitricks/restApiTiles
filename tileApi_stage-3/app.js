const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var tileRouter = require('./routers/tileRouter');

app.use('/api',tileRouter);

app.listen(port, () => {
  console.log(`running port  ${port}`);
});
