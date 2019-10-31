'use strict';
const mongoose = require('mongoose');

const mongoDB = `mongodb://10.139.127.197/electron`;
mongoose.connect(mongoDB, { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

const UserStatSchema = new mongoose.Schema({
    server: {
        vpnhub: String,
    },
    sessions: [{ count: Number, time: Number}],
    currentUsers: [{ count: Number, time: Number}]
});

module.exports = mongoose.model('userStat', UserStatSchema);