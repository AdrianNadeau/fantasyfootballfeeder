let Parser = require('rss-parser');
let parser = new Parser();
const express = require('express');
const app = express();
const path = require('path');
const route = express.Router();
const mongoose = require('mongoose');

require('dotenv').config();

const hostname = '127.0.0.1';
const port = 3000;
//add the router
const indexRouter = require("./routes/route.js");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(express.static(__dirname + "/public"));

 

app.use((req, res,next)=>{
   res.status(404).send('<h1> Page not found </h1>');
});
 //Mongoose Connection

  mongoose
  .connect(process.env.CONNECTION_URL, {
   //  useNewUrlParser: true,
   //  connectWithNoPrimary: true,
   //  useUnifiedTopology: true,
   //  useCreateIndex: true,
  })
  .catch((error) => console.error(error));
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Football Feeder running on port ${ PORT }`);
  });


console.log("=================================================");

