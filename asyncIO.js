var fs = require("fs");

// function readFile(callback) {
//   fs.readFile(process.argv[2], "utf8", function(err, data) {
//     var newLines = data.split("\n");
//     var answer = newLines.length - 1;
//   });
//   callback();
// }
//
// function logFileLength() {
//   console.log(answer);
// }
//
// readFile(logFileLength);

fs.readFile(process.argv[2], "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  var answer = data.split("\n").length - 1;
  // var newLines = data.split("\n");
  // var answer = newLines.length - 1;
  console.log(answer);
});
