const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let User = new Schema({
  user_name: {
    type: String
  },
  user_email: {
    type: String
  },
  section: {
    type: String
  },
  devices: {
    type: Array
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  }
}, {
  // collection: 'students'
  collection: 'users'
})

module.exports = mongoose.model('User', User)