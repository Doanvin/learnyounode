// Main
const filterLS = require('./5modularLs');

const folder = process.argv[2];
const ext = process.argv[3];

filterLS(folder, ext, (err, data) => {
    if (err) throw err;
    data.forEach((item) => console.log(item));
});
