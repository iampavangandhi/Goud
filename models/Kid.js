const mongoose = require ('mongoose');

const KidSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    class : {
        type : Number
    },
    photo : {
        type : String
    },
    desc : {
        type : String
    }
});

const Kid = mongoose.model('Kids',KidSchema);

module.exports = Kid;