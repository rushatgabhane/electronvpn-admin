"use strict";
const express = require('express'),
      router = express.Router(),
      User = require('../models/user');

// @route  GET /users
// @desc   Get info of all users, with filter(search) functionality
// @access Private (Admin only)
router.get('/', (req, res) => {
    console.log(User.find({}));
    res.send('get all users');
});

// @route  POST /users/adduser
// @desc   Add a new user
// @access Private (Admin only)
router.post('/adduser', (req, res) => {
    res.send('admin adduser');
});

// @route  PUT /users/updateuser
// @desc   Update an existing user
// @access Private (Admin only)
router.put('/updateuser', (req, res) => {
    res.send('update');
});

// @route  DELETE /users/deleteuser
// @desc   Delete an existing user
// @access Private (Admin only)
router.delete('/deleteuser', (req, res) => {
    res.send('delete');
});

// @route  PUT /users/updateusers
// @desc   Update Multiple users satisfying a condition like ispresent
// @access Private (Admin only)
router.put('/updateuser', (req, res) => {
    res.send('update many');
});

module.exports = router;