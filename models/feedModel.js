const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String},
  link: {type: String},
  feedUrl: { type: String},
  feedLogo: { type: String},  
})
  

const Feed = mongoose.model('Feed', feedSchema);
module.exports = Feed;