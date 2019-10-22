const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      helper = require('../helper_modules/index');

// @desc Middleware for all routes to require user to be logged in
router.all('*', helper.isLoggedIn);

// @route  GET /users
// @desc   Get info of all users, with filter(search) functionality
// @access Private (Admin only)
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err) {
            console.error('err');
            //do something...
        }
        users.map(user => {
            console.log(user.username);
        });
    });
    res.send('get all users');
});

// @route  POST /users/adduser
// @desc   Add a new user
// @access Private (Admin only)
router.post('/adduser', (req, res) => {
    res.send('admin adduser');
    res.sendStatus(201);
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