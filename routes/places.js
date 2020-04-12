const express = require('express');
const router = express.Router();
const PLACES = require('./../data/places').PLACES;

router.get('/', (req, res, next) => {
    res.json(PLACES);
});

router.get('/:pid', (req, res, next) => {
    const pid = req.params.pid;
    const place = PLACES.find((place) => place.id === pid);
    res.json({place});
});

module.exports = router;