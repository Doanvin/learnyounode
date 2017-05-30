var fs = require("fs");
var path = require("path");

var dirName = process.argv[2];
var extFilter = process.argv[3];

function filterByExtention(dirName, extFilter){

}

fs.readdir(dirName, function callback (err, ls) {
  if (err) throw err;
  var filteredArray = ls.filter(function(fileName){
    if (path.extname(fileName) == extFilter)
      return fileName;
  });
  for(var i = 0; i < filteredArray.length; i++)
    console.log(filteredArray[i]);
});
