'use strict';
const User = require('../models/user');

// @desc    Middleware to check if user is admin 
function isAdmin (req, res, next) {
    User.findOne({'username': req.body.username}, (err, user) => {
        if(err) {
            console.error(err, 'err');
            return res.sendStatus(500);
        }
        if(!user || !user.admin) {
            return res.sendStatus(403);
        }
        return next();
    });
}

// @desc    Middleware to check if user logged in
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}
	// Redirect to Login if not logged in
	return res.redirect('/admin/login');
}

// @desc    convert size in GB to Bytes
// @param   {number} size in gigabytes
// @return  {number} size in bytes
function gigabytesToBytes(gb) {
    return Number(gb) * Math.pow(1000,3);
}

// @desc    get epoch time after 'x' days in milliseconds
// @param   {number} number of days
// @return  {number} epoch time in milliseconds
function getTimeAfterDays(days) {
    return (new Date ( new Date().getTime() + ( Number(days)*24*60*60*1000 ) )).getTime();
}

module.exports = {
    isAdmin,
    isLoggedIn,
    gigabytesToBytes,
    getTimeAfterDays
}