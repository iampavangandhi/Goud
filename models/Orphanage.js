const mongoose = require('mongoose');

const OrphSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    manager : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    kids : [{
        type : Schema.Types.ObjectId,
        ref : 'Kids',
        required : true
    }]

});

const Orphanage = mongoose.model('Orphange', OrphSchema);

module.exports = Orphanage;