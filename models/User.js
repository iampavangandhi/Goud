const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
<<<<<<< HEAD
  },
  manager : {
    type : Boolean,
    default : false
=======
>>>>>>> bb72735b0ecd3a20df4c4225df073a00cface742
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
