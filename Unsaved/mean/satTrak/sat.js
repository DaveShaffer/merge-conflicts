var mongoose = require('mongoose');

var SatSchema = new mongoose.Schema({
  noradNum: Number,
  name: String,
  country: String,
  launchDate: Date,
  purpose: String,
  perigee: Number,
  apogee: Number
});

SatSchema.methods.print = function() {
  console.log(this.name + ' ' + this.country + ' ' + this.purpose);
};

module.exports = mongoose.model('Sat', SatSchema);
