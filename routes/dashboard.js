"use strict";
const express = require('express'),
      router = express.Router(),
      helper = require('../helper_modules/index');

// Require user to be logged in for all routes
router.all('*', helper.isLoggedIn);

// @route  GET /dashboard
// @desc   A place for various admin functions, user metrics and nice graphs
// @access Private (Admin users)
router.get('/', (req, res) => {
    res.render('dashboard');
});

module.exports = router;