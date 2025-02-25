'use strict';
const express               = require('express'),
	  app                   = express(),
	  flash                 = require('express-flash'),
 	  bodyParser            = require('body-parser'),
 	  passport              = require('passport'),
 	  User                  = require('./models/user'),
 	  request               = require('request'),
 	  async 				= require('async'),
	  fs                    = require('fs'),
	  userStats = require('./userStats');

setInterval(() => {
	userStats.saveUserStats();
}, 600000);

require('dotenv').config({path: '.env'});

const hostname = 'localhost';
const port = 3001;
const electronServer1Ip = '10.139.63.22:20555';

app.set('view engine', 'ejs');
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

// Use and Require Express Session
app.use(require('express-session')({
	secret: process.env.EXPRESS_SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Define Routes
// @desc default nginx config: electronvpn.com/admin
app.use('/', require('./routes/index')); // nginx default path 
app.use('/login', require('./routes/login'));
app.use('/dashboard', require('./routes/dashboard')); 
app.use('/users', require('./routes/users'));

// @route  GET invalid routes
// @desc   Display page not found message
// @access Public
app.get('*', (req, res) => {
	res.status(404).render('404');
});

app.listen(port, hostname, () => {
	console.log(`Admin server started... on port ${port}`);
});