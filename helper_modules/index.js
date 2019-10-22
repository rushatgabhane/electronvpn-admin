const User = require('../models/user');

// @desc  Middleware to check if user is admin 
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

// @desc  Middleware to check if user logged in
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	// Redirect to Login if not logged in
	res.redirect('/admin/login');
}

module.exports = {
    isAdmin,
    isLoggedIn
}