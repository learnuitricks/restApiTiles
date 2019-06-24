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
        
    tileRouter.route('/tiles')
    .post((req, res) => {
        const newTile = new Tile(req.body);
        newTile.save();
        res.send(201);
    });
    return tileRouter;
}

module.exports = router;


