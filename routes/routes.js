


***NEW SUBDOMAIN REQUIRED***


DOES NOT WORK.





// const sgMail = require('@sendgrid/mail');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('../models/user');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// module.exports = (app) => {

//     // Login page
//     app.get('/', (req, res) => {
//         res.render('index', {
//             error: req.flash('error'),
//         });
//     });

//     app.get('/admin/dashboard', (req, res) => {
//         res.send('dashboard');
//     });

//     // Login Logic
//     // app.post('/login', requireAdmin(), passport.authenticate('local', {
//     //     successRedirect: '/dashboard',
//     //     failureRedirect: '/',
//     //     failureFlash: true
//     // }));
//     app.post('/admin/login', requireAdmin(), (req, res) =>{
//         console.log('admin login');
//         res.sendStatus(200);
//     });


//     // app.post('/useradd', (req, res) => {
//     //     user.userAdd(req);
//     // });
//     app.get('*', (req, res) => {
//         res.send('admin 404');
//     });
        
// }

// function requireAdmin () {
//     return function(req, res, next) {
//         console.log('middleware');
//         User.findOne({ "username": req.body.username },  (err, user) => {
//             if (err) { 
//                 return next(err); 
//             }
//             if (!user) { 
//                 console.log('the user does not exist');
//                 res.redirect('/');
//             }
//             if (!user.admin) { 
//                 console.log('the user exists but is no admin user');
//                 // the user exists but is no admin user
//                 res.redirect('/');
//             }
//             if(user.admin) {
//                 // Hand over control to passport
//                 next();
//             }
//         });
//     }
//   }
  