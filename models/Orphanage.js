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
        ref : 'Kids',
        required : false
    }]

});

const Orphanage = mongoose.model('Orphange', OrphSchema);

module.exports = Orphanage;

