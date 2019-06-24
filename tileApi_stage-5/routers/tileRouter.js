const express = require('express');
const tileRouter = express.Router();

function router(Tile){
tileRouter.route('/tiles')
.get((req,res)=>{
   Tile.find((err,tiles)=>{
       if(err){
           return res.send(err);
       }
       return res.json(tiles);
   });
});
return tileRouter;
}
module.exports = router;


