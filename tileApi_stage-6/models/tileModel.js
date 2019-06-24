const mongoose = require('mongoose');

const {Schema}= mongoose;

const tileModel = new Schema({
   name: {type:String},
   model: {type:String},
   price: {type:Number},
   rating: {type:Number},
   image: {type:String},
   status:{type:Number},
   Id: {type:Number}
})

module.exports = mongoose.model('Tile',tileModel);

