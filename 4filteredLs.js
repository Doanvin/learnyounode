const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = '.' + process.argv[3].toLowerCase();

fs.readdir(folder, (err, ls) => {
  if (err) throw err;
  const arr = ls.filter((file) => {
    if (path.extname(file) === ext) return file;
  });
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
});

// console.log(data);
