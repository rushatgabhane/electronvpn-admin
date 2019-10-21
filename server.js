'use strict';
const express               = require('express'),
	  app                   = express(),
	  flash                 = require('express-flash'),
 	  bodyParser            = require('body-parser'),
 	  passport              = require('passport'),
 	  User                  = require('./models/user'),
 	  request               = require('request'),
 	  async 				= require('async'),
 	  fs                    = require('fs');

require('dotenv').config({path: '.env'});

const hostname = 'localhost';
const port = 3001;
const electronServer1Ip = '10.139.63.22:20555';

app.set('view engine', 'ejs');
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use(require('express-session')({
	secret: 'glass pixel bighelicon dumtemple bell audi otechnishas asdas',
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

app.get('*', (req, res) => {
	res.status(404).render('404');
});

app.listen(port, hostname, () => {
    console.log(`Admin server started... on port ${port}`);
});