var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);
