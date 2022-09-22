// const fs = require("fs");
// const { parse } = require("csv-parse");

// fs.createReadStream("./data/feeds.csv")
// .pipe(parse({ delimiter: ",", from_line: 2 }))
// .on("data", function (row) {
//   console.log(row);
// })
// .on("end", function () {
//   console.log("finished");
// })
// .on("error", function (error) {
//   console.log(error.message);
// });
const events = require('events');
const fs = require('fs');
const readline = require('readline');
// let feeds=[0];

// (async function processLineByLine() {
//   try {
//     const rl = readline.createInterface({
//       input: fs.createReadStream('./data/feeds.csv'),
//       crlfDelay: Infinity
//     });
    
//     rl.on('line', (line) => {
      
//       console.log(`Line from file: ${line}`);
//       feeds.push(line);
//     });

//     await events.once(rl, 'close');
//     console.log('feeds: '+feeds);
//     console.log('Reading file line by line with readline done.');
//     const used = process.memoryUsage().heapUsed / 1024 / 1024;
//     console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
//   } catch (err) {
//     console.error(err);
//   }
// })();


// Node.js program to demonstrate the
// fs.readFileSync() method


// Calling the fs.readFile() method
// for reading file 'input1.txt'
// fs.readFile('./data/feeds.csv',
// 		{encoding:'utf8', flag:'r'},
// 		function(err, data) {
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log(data);
// });

// Calling the fs.readFileSync() method
// for reading file 'input2.txt'
const data = fs.readFileSync('./data/feeds.csv',
			{encoding:'utf8', flag:'r'});
    // split the contents by new line
    const lines = data.split(/\r?\n/);
     // print all lines
     lines.forEach((line) => {
      console.log("ADD: "+line);
  });
// Display data
// console.log(data);
