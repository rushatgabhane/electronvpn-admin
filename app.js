"use strict";
const express = require('express');
const app = express();
const flash = require('express-flash');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/user');
const request = require('request');
const async = require('async');
const crypto = require('crypto');
const fs = require('fs');

require('dotenv').config({
    path: '.env'
});

const hostname = 'localhost' ;
const port = 3001;
const electronServer1 = '10.139.63.22:20555';

app.set('view engine', 'ejs');
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../public'));

app.use(require('express-session')({
	secret: 'glass pixel bighelicon dumtemple bell audi otechnishas asdas',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Imports routes
require('./routes/routes')(app);

app.listen(port, hostname, () => {
    console.log(`Admin server started... on port ${port}`);
});