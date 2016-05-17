var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create model item
var ItemSchema = new Schema( {
  name: {
    type: String,
    required: true
  }, // end item name
  type: {
    type: String,
    required: true
  }, // end item type
  picture_url: {
    type: String,
    required: true
  }, // end item picture_url
  isClean: Boolean,
  lastWorn: Date,
  color: String,
  material: String,
  users:   [ {type: Schema.ObjectId, ref: "User"} ],
  outfits: [ {type: Schema.ObjectId, ref: "Outfit"} ]
} ); // end ItemSchema

// make model avail for use
module.exports = mongoose.model('Item', ItemSchema);
