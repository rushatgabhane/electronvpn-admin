const express = require('express');
const router = express.Router();

// @route  GET admin/
// @desc   
// @access Public
router.get('/', (req, res) => {
    res.render('index');
});