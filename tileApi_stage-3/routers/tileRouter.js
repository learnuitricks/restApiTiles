const express = require('express');
const tileRouter = express.Router();

tileRouter.get('/tiles',(req,res)=>{
    res.send(tiles=[
        {
        image:"tile1.jpg",
         name:"kajaria",
         model:"nit-01",
         price :200,
         rating:4,
         status:1 
        },
         {
            name: 'johnson',
            model: 'nit-02',
            price: 100,
            rating: 4,
            image: 'tile2.jpg',
            status: 0
         }
        ]);
 });
module.exports = tileRouter;