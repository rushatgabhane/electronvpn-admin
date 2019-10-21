"use strict";
const express = require('express'),
      router = express.Router();

// @route  GET admin/users
// @desc   Get info of all users
// @access Private (Admin only)
router.get('/', (req, res) => {
    res.send('admin get users');
});

// @route  POST admin/users/adduser
// @desc   Add a new user
// @access Private (Admin only)
router.post('/adduser', (req, res) => {
    res.send('admin adduser');
});

// @route  PUT admin/users/updateuser
// @desc   Update an existing user
// @access Private (Admin only)
router.put('/updateuser', (req, res) => {
    res.send('update');
});

// @route  DELETE admin/users/deleteuser
// @desc   Delete an existing user
// @access Private (Admin only)
router.delete('/deleteuser', (req, res) => {
    res.send('delete');
});

// @route  PUT admin/users/updateusers
// @desc   Update Multiple users satisfying a condition like ispresent
// @access Private (Admin only)
router.put('/updateuser', (req, res) => {
    res.send('update many');
});

module.exports = router;