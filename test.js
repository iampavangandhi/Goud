const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

const User = require('./models/User');
const Orp = require('./models/Orphanage');
const Kid = require('./models/Kid');

<<<<<<< HEAD
console.log(user.id);
=======
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) console.log(err)
    var dbc = mongoose.connection;
   
   /* var OrphanageData = new Orp ({
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
    */


// find all athletes who play tennis, selecting the 'name' and 'age' fields
query= Orp.find( )
query.exec( function( err, data){
    console.log(data)
}

    )
});
>>>>>>> bb72735b0ecd3a20df4c4225df073a00cface742
