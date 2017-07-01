/**
 * Created by don on 6/30/17.
 */
const http = require('http');

http.get(process.argv[2], (res) => {
  const { statusCode } = res;
  res.setEncoding('utf8');

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\nStatus Code: ${statusCode}');
  }
  if (error) { console.error(error.message); }

  res.on('data', (data) => { console.log(data); });
});
