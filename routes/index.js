"use strict";
const express = require('express'),
      router = express.Router();

router.get('/', (req, res) => {
    res.send('redirect to login');
});

module.exports = router;