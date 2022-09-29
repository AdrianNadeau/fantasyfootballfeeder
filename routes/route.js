var express = require('express');

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
  console.log("***************************** GET HOME **************************");
  try {
    const feeds = await Feed.find()

    res.render('home', {title: 'Picks', feeds})
  } catch (error) {
    console.log(error.message)
  }
});

router.get('/getfeeds/:id/', async (req, res) => {
  console.log("***************************** GET ONE "+req.params.id+"**************************");
  try {
    let feed = await Feed.findById(req.params.id)

    if(!feed) {
      res.status(404).send(`No feeds for ${req.params.id}`)
      return
    }

    const feedRSS = await parser.parseURL(feed.feedUrl)

    const feedLimited = feedRSS.items.slice(0, 5)

    res.send(feedLimited)

  } catch (error) {
    res.status(500).send(error.message)
  }
    
})
// VIEW ALL ARTICLES FOR A FEED
router.get('/getallfeeds/:id/', async (req, res) => {
  console.log("get all for : "+req.params.id);
  console.log("***************************** GET ALL "+req.params.id+"**************************");
  try {
    let feed = await Feed.findById(req.params.id)
    
    if(!feed) {
      res.status(404).send(`No feeds for ${req.params.id}`)
      return
    }

    const feedRSS = await parser.parseURL(feed.feedUrl)

    const feedLimited = feedRSS.items;

    res.send(feedLimited)

  } catch (error) {
    res.status(500).send(error.message)
  }
  
})
// VIEW ALL ARTICLES FOR A FEED
router.get('/viewall/:id/', async (req, res) => {
  try {
    console.log("***************************** GET ALL  **************************");
    let feedId = req.params.id;
    let feed = await Feed.findById(req.params.id)

    if(!feed) {
      res.status(404).send(`No feeds for ${req.params.id}`)
      return
    }

    let feedTitle= feed.title;
    console.log("feedTitle :"+feedTitle);
    res.render('viewall', {feedId, feedTitle})

  } catch (error) {
    console.log(error.message)
  }
     
 })
 

module.exports = router;