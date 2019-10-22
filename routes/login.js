const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      passport = require('passport'),
      LocalStrategy = require('passport-local'),
      helper = require('../helper_modules/index');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// @route    GET /login
// @desc     Authentication page for admin
// @access   Public
router.get('/', (req, res) => {
    res.render('index');
});

// @route    POST /login
// @desc     Authenticate admin users
// @access   Public
router.post('/', helper.isAdmin, passport.authenticate('local', {
	successRedirect: '/admin/dashboard',
	failureRedirect: '/admin/login',
	failureFlash : true
}));

module.exports = router;