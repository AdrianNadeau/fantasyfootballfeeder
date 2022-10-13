const Feed = require("./models/feedModel")
const mongoose = require("mongoose")
// // fs.createReadStream('./data/feeds.csv')
mongoose
  .connect('mongodb://localhost:27017/fantasyfootball-dev', {
   //  useNewUrlParser: true,
   //  connectWithNoPrimary: true,
   //  useUnifiedTopology: true,
   //  useCreateIndex: true,
  })
  .catch((error) => console.error(error));
 
  //REMOVE ALL Feed
  Feed.remove( function ( err ) {
    console .log( "successfully deleted!" );
});