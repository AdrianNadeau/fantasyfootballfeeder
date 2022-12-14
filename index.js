let Parser = require('rss-parser');
let parser = new Parser();
const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const route = express.Router();

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

app.listen(process.env.port || 3000);

app.use((req, res,next)=>{
   res.status(404).send('<h1> Page not found </h1>');
});

console.log('Running at Port 3000');


// const allFileContents = fs.readFileSync('feeds.txt', 'utf-8');
// allFileContents.split(/\r?\n/).forEach(line =>  {
//   console.log(`NEW FEED : ${line}`);
//     // let feed = await parser.parseURL(line);
//     (async () => {
//   // let feedURL="https://api.foxsports.com/v2/content/optimized-rss?partnerKey=MB0Wehpmuj2lUhuRhQaafhBjAJqaPU244mlTDK1i&size=30&tags=fs/nfl";
//   console.log("=============================== LOAD FEED =========================");
//   // console.log("FEED "+line);
//   let feed = await parser.parseURL(line);
//   console.log(line.title);
//   console.log("=========================================");

//   feed.items.forEach(item => {
//     console.log("Title: :"+item.title );
//     console.log("LINK: : "+item.link );
//   });

// })();

// });

//   console.log(feed.title);
//   console.log("=========================================");

//   feed.items.forEach(item => {
//     console.log("Title: :"+item.title );
//     console.log("LINK: : "+item.link );
//   });

// });
// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);