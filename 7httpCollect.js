const http = require('http');

http.get(process.argv[2], (res) => {
    let theData = [];
    res.setEncoding('utf8');
    res.on('data', (data) => theData.push(data));
    res.on('error', console.error);
    res.on('end', () => {
        theData = theData.join('');
        console.log(theData.length);
        console.log(theData);
    });
}).on('error', console.error);
