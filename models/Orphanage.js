const mongoose = require('mongoose');

const OrphSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    manager : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },email : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    kids : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Kids',
        required : true
    }]

});

const Orphanage = mongoose.model('Orphange', OrphSchema);

module.exports = Orphanage;