const fs = require("fs");
const path = require("path");

const dirName = process.argv[2];
const ext = '.' + process.argv[3].toLowerCase();

fs.readdir(dirName, (err, ls) => {
  if (err) throw err;
  const newArray = ls.filter((fileName) => {
    if (path.extname(fileName) === ext) {
      return fileName;
    }
  });
  for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
  }
});

// console.log(data);
