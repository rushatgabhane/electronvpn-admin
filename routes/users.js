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
    let electronServerUserAdd = `http://${electronServerIp}/useradd/${phoneNumber}/none/vpn1/${password}`;
    request.get(electronServerUserAdd, function (error, response, body) {
        if (response == null) {
            res.status(500).send("Unable to communicate with ElectronServer whilst adding user");
        }
        else if(response.statusCode == 200){
            console.log("Added to SE database successfully!");
            // Add to MongoDB
            User.register(new User({
                name: req.body.username,
                phone: phoneNumber,
                email: email,
                regno: regNo,
                exptime: utcTimeAfterThirtyDays.toString(10),
                data: "50000000000", //in bytes
                // data: "100000000", // for development 100 mb
                vpnhub: "vpn1",
                description: "none",
                groupname: "none",
                ispresent: "1",
                username: phoneNumber, // Phone is the username
                plainpassword: password, // Plaintext password for re-adding user to ElectronServer
                collegename: "mnnit",
                dataused: "0",
                amountpaid: "0"
            }), 
            password, function (err, websiteuser) {
                if(err){
                    console.log(err);
                    return res.send('passport returned erro');
                }
                console.log('added user but didn\'t send a mail');
                res.send('user added!');
            });
        }
    });
});
// @route  POST /users/updateuser
// @desc   Update an existing user
// @access Private (Admin only)
router.post('/updateuser', (req, res) => {
    res.send('update');
});

// @route  POST /users/deleteuser
// @desc   Delete an existing user
// @access Private (Admin only)
router.post('/deleteuser', (req, res) => {
    res.send('delete');
});

// @route  POST /users/updateusers
// @desc   Update Multiple users satisfying a condition like ispresent
// @access Private (Admin only)
router.post('/updateusers', (req, res) => {
    res.send('update many');
});

module.exports = router;