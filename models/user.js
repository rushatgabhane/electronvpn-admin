const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const mongoDB = `mongodb://10.139.127.197/electron`;
mongoose.connect(mongoDB, { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('useCreateIndex', true);

const UserSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    regno: String,
    exptime: String,
    data: String,
    vpnhub: String,
    description: String,
    groupname: String,
    ispresent: String,
    username: String, // Phone is the username
    plainpassword: String,
    collegename: String,
    dataused: String,
    amountpaid: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('CommonDatabase', UserSchema);