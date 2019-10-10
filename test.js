const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

const User = require('./models/User');

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    var dbc = mongoose.connection;
    User.findOne({name : 'Pawan Verma'}).exec((err,users)=>{
        console.log(users);
    });
});
