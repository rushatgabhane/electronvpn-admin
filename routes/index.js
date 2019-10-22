"use strict";
const express = require('express'),
      router = express.Router();

// @route  GET /
// @desc   Check if user is admin and redirect to dashboard, else redirect to login
// @access Public
router.get('/', (req, res) => {
    res.redirect('/admin/login');
});

module.exports = router;