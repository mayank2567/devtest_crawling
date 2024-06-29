var converter = require("./solutions/answer1");
const express = require('express');
const router = express.Router();

router.get('/rgbToHex', (req, res) => {
    res.send(converter.rgbToHex((req.query.red), (req.query.green), (req.query.blue) || ''));
});

router.get('/hexToRgb', (req, res) => {
    res.send(converter.hexToRgb((req.query.hex)) || '');
});

module.exports = router;
