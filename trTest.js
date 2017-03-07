var http = require('http');
var request = require('request');

function testServer(callback) {

request({
  method: 'GET',
  url: 'http://127.0.0.1:3000/'
}, function (err, res) {
  if (err) return console.error(err.message);

    console.log('--------------------------')
    console.log(res.body);
    console.log('-------------------------') 

  return res;
  });

}


var resp = testServer();
