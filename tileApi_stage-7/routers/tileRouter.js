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

 

    return tileRouter;
}
module.exports = router;


