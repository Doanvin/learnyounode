var fs = require("fs");
var path = require("path");

var dirName = process.argv[2];
var ext = "." + process.argv[3].toLowerCase();

fs.readdir(dirName, function callback (err, ls) {
  if (err) throw err;
  var newArray = ls.filter(function(fileName){
    if (path.extname(fileName) == ext)
      return fileName;
  });
  for(var i = 0; i < newArray.length; i++)
    console.log(newArray[i]);
});

// console.log(data);
