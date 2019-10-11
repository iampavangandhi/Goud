const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

const User = require('./models/User');
const Orp = require('./models/Orphanage');
const Kid = require('./models/Kid');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) console.log(err)
    var dbc = mongoose.connection;
   
    var OrphanageData = new Orp ({
        name : "Orphanage 1",
        manager : "5da02f23453e7009bfc64d5c",
        address : "123 localaddress",
        phone : 832193291,
        email : "shubam@123.com",
        photo : "ninja.jpg",
        description : "very nice",
        kids : [
            {
                id : "5da02f23453e7009bfc64d5c"
            },
            {
                id : "5da02f23453e7009bfc64d5c"
            }
        ] 
    });

    OrphanageData.updateOne({name : "Orphanage 1"}).then(err => console.log(err));
});
