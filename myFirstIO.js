var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]).toString();
var newLines = buf.split('\n');
console.log(newLines.length - 1)
