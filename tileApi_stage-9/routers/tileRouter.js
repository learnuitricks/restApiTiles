const express = require('express');
const tileRouter = express.Router();

function router(Tile) {

    tileRouter.route('/tiles')
        .get((req, res) => {
            const { query } = req;
            Tile.find(query, (err, tiles) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(tiles);
            });
        });

    tileRouter.route('/tiles/:tileId')
        .get((req, res) => {
            Tile.findById(req.params.tileId, (err, tiles) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(tiles);
            });

        });
        
    tileRouter.route('/tiles/:tileId')
    .post((req, res) => {
        const newTile = new Tile(req.body);
        newTile.save();
        res.send(201);
    });

    tileRouter.route('/tiles/:tileId')
    .put((req,res)=>{
        Tile.findById(req.params.tileId, ( err, tile)=>{
            if(err){
                return res.send(err);
            }
            else{
                tile.name = req.body.name;
                tile.model = req.body.model;
                tile.price = req.body.price;
                tile.rating = req.body.rating;
                tile.image = req.body.image;
                tile.save();
            }
            return res.json(tile);
        });
    });

    return tileRouter;
}

module.exports = router;


