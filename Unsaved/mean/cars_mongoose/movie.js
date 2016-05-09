var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: {type: String, required: true},
  genre: {type: String, required: true},
  releaseYear: Number,
  director: String,
  rating: Number
});

MovieSchema.methods.print = function () {
  console.log(this.title + ' ' + this.genre + ' ' + this.releaseYear + ' ' + this.director + ' ' + this.rating);
};

module.exports = mongoose.model('Movie', MovieSchema);
