var express = require('express');
const fs = require('fs');
var router = express.Router();
const Feed = require("../models/feedModel")
const mongoose = require("mongoose")
let Parser = require('rss-parser');
const { resolveSoa } = require('dns');
let parser = new Parser();
const { parse } = require("csv-parse");
const readline = require('readline');
const events = require('events');

// Ping to keep Heroku dyno up
router.get('/ping', function (req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Loaded Successfully');
});
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
/* GET feeds page. */
router.get('/home', async (req, res) => {

  try {
    let feeds = [];
    // Calling the fs.readFileSync() method
    // for reading file 'input2.txt'
    const data = fs.readFileSync('./data/feeds.csv',
    {encoding:'utf8', flag:'r'});
    const lines = data.split(/\r?\n/);
    lines.forEach((line) => {
      feeds.push(line)
      // console.log("ADD: "+line);
  });
  

    res.render('home', { title: 'Picks', feeds })
  } catch (error) {
    console.log(error.message)
  }
});

router.get('/getfeeds/:url', async (req, res) => {

  try {
    console.log("Url: "+req.params.url)
    // let feed = await Feed.findById(req.params.id)

    // if (!feed) {
    //   res.status(404).send(`No feeds for ${req.params.id}`)
    //   return
    // }

    const feedRSS = await parser.parseURL(req.params.url)
    res.send(feedRSS)

  } catch (error) {
    res.status(500).send(error.message)
  }

})
router.get('/addfeed', async (req, res) => {

  res.render('addfeed');
});
router.post('/addfeed', async (req, res) => {

  res.render('addfeed');
});

module.exports = router;
