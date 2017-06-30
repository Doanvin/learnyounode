// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines (\n) it contains to the
// console (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument (i.e., process.argv[2]). You do not need to make
// your own test file.
var fs = require('fs');
var newLines = 0;

fs.readFileSync(dirName);
var dirName = process.argv[2];
var buf = process.argv[3];

str = buf.toString();
strArr = str.split('\n');

for (i = 0; i < strArr.length; i++)
  newLines += 1;

console.log(newLines);
