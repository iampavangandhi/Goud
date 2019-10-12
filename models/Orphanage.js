const mongoose = require('mongoose');

const OrphSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    manager : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
     password: {
    type: String,
    required: true
  },
    phone : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : false
    },
    description :{
        type : String,
        required : true
    },
    kids : [{
        type : mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
        ref : 'Kids'
=======

        ref : 'Kids',
        required : false

>>>>>>> be9fc236ba65897651a6a8a3661e84e980e3602c
    }]

});

const Orphanage = mongoose.model('Orphange', OrphSchema);

module.exports = Orphanage;

