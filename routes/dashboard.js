"use strict";
const express = require('express'),
      router = express.Router();

// @route  GET admin/dashboard
// @desc   A place for various admin functions, user metrics and nice graphs
// @access Private (Admin users)
router.get('/', (req, res) => {
    res.send('admin dashboard');
});

module.exports = router;