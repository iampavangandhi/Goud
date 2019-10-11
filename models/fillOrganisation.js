const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
 //let selOrp = require()
const User = require('../models/User');
const Orp = require('../models/Orphanage');
const Kid = require('../models/Kid');

selOrp ='Orphanage 1';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) console.log(err)
    var dbc = mongoose.connection;
   
  
query= Orp.find( {name:selOrp} , 'name address phone email photo', function( err, data){
    console.log(data)
}

    );

});