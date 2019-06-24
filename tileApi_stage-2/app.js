const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
   res.send(tiles=[
       {
       image:"tile1.jpg",
        name:"kajaria",
        model:"nit-01",
        price :200,
        rating:4,
        status:1 }]);
});

app.listen(port,()=>{
   console.log(`express running on the port ${port}`);
})

