var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
  name: String,
  breed: String,
  dob: { type: Date, default: Date.now },
  gender: String,
  family: String,
  status: String
});

module.exports = mongoose.model('Animal', AnimalSchema);
