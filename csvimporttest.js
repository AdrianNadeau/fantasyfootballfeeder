const fs = require("fs")

//install node-csv. commad is npm i csv
const { parse } = require("csv-parse")

const mongoose = require('mongoose')
const Feed = require("./models/feedModel")

mongoose
  .connect('mongodb://localhost:27017/fantasyfootball-dev')
  .then(() => console.log("DB connection is ready"))
  .catch((error) => console.error(error));


fs.createReadStream(`${__dirname}/data/feeds.csv`)
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", async function (row) {
    console.log(row[0]);
    const feed = new Feed({
        title : row[1],
        text: row[1],
        feedUrl: row[0],
        feedLogo: row[2]
    })

    await feed.save()

  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
