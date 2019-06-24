const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
   res.send('welcome to tiles api');
})

app.listen(port,()=>{
   console.log(`express running on the port ${port}`);
})

