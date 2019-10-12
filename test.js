const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

const User = require('./models/User');
const Orp = require('./models/Orphanage');
const Kid = require('./models/Kid');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => { 
    var dbc = mongoose.connection;

  /*
  Orp.find({} , 

  function(err, data){
    if(err){
        console.log(err);
        return
    }

    if(data.length == 0) {
        console.log("No record found")
        return
    }

    console.log(data);
})


    console.log(dbc.collections);
*/
    Kid.find().then(users=> console.log(users));
});
