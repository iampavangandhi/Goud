const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mongoURI;

const User = require('./models/User');
const Orp = require('./models/Orphanage');
const Kid = require('./models/Kid');

// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    var dbc = mongoose.connection;
});
