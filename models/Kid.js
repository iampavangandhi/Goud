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
    fName : {
        type : String,
        required : true
    }
});

const Kid = mongoose.model('Kids',KidSchema);

module.exports = Kid;