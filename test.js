const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

const User = require('./models/User');
const Orp = require('./models/Orphanage');
const Kid = require('./models/Kid');

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    var dbc = mongoose.connection;
});
