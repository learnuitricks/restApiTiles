const express = require('express');
const tileRouter = express.Router();
const Tile = require('../models/tileModel');

tileRouter.route('/tiles')
.get((req,res)=>{
   Tile.find((err,tiles)=>{
       if(err){
           return res.send(err);
       }
       return res.json(tiles);
   })
})


module.exports = tileRouter;