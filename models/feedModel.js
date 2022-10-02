const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  feedUrl: { type: String},
  feedLogo: { type: String},
  displayCount: { type: Number},
  
})
  

const Feed = mongoose.model('Feed', feedSchema);
module.exports = Feed;