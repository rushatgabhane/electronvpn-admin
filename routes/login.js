'use strict';
const express = require('express'),
      router = express.Router();

// @route    GET /login
// @desc     Authentication page for admin
// @access   Public
router.get('/', (req, res) => {
    res.send('admin login');
});

router.post('/login', (req, res) => {

});

module.exports = router;