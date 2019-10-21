"use strict";
const express = require('express'),
      router = express.Router();

// @route  GET admin/dashboard
// @desc   Access to admin functions
// @access Private (Admin users)
router.get('/', (req, res) => {
    res.send('admin dashboard');
});

module.exports = router;