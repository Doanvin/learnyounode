// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines (\n) it contains to the
// console (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument (i.e., process.argv[2]). You do not need to make
// your own test file.
const fs = require('fs');

const dirName = process.argv[2];
let newLines = 0;
const buf = fs.readFileSync(dirName);
const str = buf.toString();
const strArr = str.split('\n');

for (let i = 1; i < strArr.length; i++) {
  newLines += 1;
}

console.log(newLines);
