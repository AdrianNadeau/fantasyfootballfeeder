var express = require('express');
const fs = require('fs');
var router = express.Router();
const Feed = require("../models/feedModel")
const mongoose = require("mongoose")



let Parser = require('rss-parser');
let parser = new Parser();

// Ping to keep Heroku dyno up
router.get('/ping', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Loaded Successfully');
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
/* GET feeds page. */



router.get('/home', async (req, res) => {
  console.log("GET FEEDS")
  const feeds =  Feed.find({},(err, feeds) => {
      if (err) {
          console.log("error: "+err);
      }
      else{
          // res.send(feeds)
          res.render('home', {title: 'Picks', feeds});
                        
      }
  });
});
router.get('/getfeeds/:id', async (req, res) => {
  // // Connection URI
  
  console.log("GET ARTS " +req.params.id);
  Feed.findOne({_id: req.params.id},(err, feed) => {
    if (err) {
        console.log("error: "+err);
    }
    else{
        let feedRssFeed = parser.parseURL(feed.feedUrl);
        console.log(feed.feedUrl);
        
        res.send("hello");
    }
  });
});
module.exports = router;