const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      helper = require('../helper_modules/index'),
      request = require('request'),
      UserStats = require('../models/userStats');

// @desc Middleware for all routes to require user to be logged in
router.all('*', helper.isLoggedIn);

// @route  GET /users
// @desc   Get info of all users, with filter(search) functionality
// @access Private (Admin only)
router.get('/', (req, res) => {
    // User.find({}, (err, users) => {
    //     if(err) {
    //         console.error('err');
    //         //do something...
    //     }
    //     users.map(user => {
    //         res.send(user.username);
    //     });
    // });

    User.estimatedDocumentCount( (err, totalUserCount) => {
        if(err) {
            console.log('err');
        }
        let sessionCount = [], sessionTimeStamp = [];
        request.get(`${process.env.ELECTRON_SERVER1_IP}/statusget/vpn1`, async (error, response, body) => {
            if(error) {
                console.log(error);
                return;
            }
            let sessionsSubstring = body.substring(body.indexOf('Sessions'), (body.indexOf('\n', body.indexOf('Sessions'))));
            let currentSessionCount = Number(sessionsSubstring.substring(sessionsSubstring.indexOf('|', '\n')).replace('|', '')) - 1;

            let usersSubstring = body.substring(body.indexOf('Users'), (body.indexOf('\n', body.indexOf('Users'))));
            let currentUserCount = Number(usersSubstring.substring(usersSubstring.indexOf('|', '\n')).replace('|', '')) - 1;
            
            try {
                let doc = await UserStats.findOne({_id: '5dbad4c39b41f2295c65c9b9'});
                
                for (let i = 0; i<doc.sessions.length; i++) {
                   sessionCount.push(doc.sessions[i].count);
                   sessionTimeStamp.push(new Date(doc.sessions[i].time));
                }
            }
            catch(err) {
                console.error(err);
            }

            res.render('users', {
                totalUserCount: totalUserCount,
                currentUserCount: currentUserCount,
                currentSessionCount: currentSessionCount,
                sessionCount: sessionCount,
                sessionTimeStamp: sessionTimeStamp
            });
        });
    });
});

// @route  POST /users/adduser
// @desc   Add a new user
// @access Private (Admin only)
router.post('/adduser', (req, res) => {
    // let electronServerUserAdd = `http://${electronServerIp}/useradd/${phoneNumber}/none/vpn1/${password}`;
    // request.get(electronServerUserAdd, function (error, response, body) {
    //     if (response == null) {
    //         res.status(500).send("Unable to communicate with ElectronServer whilst adding user");
    //     }
    //     else if(response.statusCode == 200){
    //         console.log("Added to SE database successfully!");
    //         // Add to MongoDB
    //         User.register(new User({
    //             name: req.body.username,
    //             phone: phoneNumber,
    //             email: email,
    //             regno: regNo,
    //             exptime: utcTimeAfterThirtyDays.toString(10),
    //             data: "50000000000", //in bytes
    //             // data: "100000000", // for development 100 mb
    //             vpnhub: "vpn1",
    //             description: "none",
    //             groupname: "none",
    //             ispresent: "1",
    //             username: phoneNumber, // Phone is the username
    //             plainpassword: password, // Plaintext password for re-adding user to ElectronServer
    //             collegename: "mnnit",
    //             dataused: "0",
    //             amountpaid: "0"
    //         }), 
    //         password, function (err, websiteuser) {
    //             if(err){
    //                 console.log(err);
    //                 return res.send('passport returned erro');
    //             }
    //             console.log('added user but didn\'t send a mail');
    //             res.send('user added!');
    //         });
    //     }
    // });
    res.send('add');
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