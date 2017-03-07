var http = require('http');

function testServer(callback) {

    return http.get({
        host: 'localhost:3000',
        path: '/'
    }, function(response) {
        // Continuously update stream with data
        console.log(response);
       return response;
    });

}


var resp = testServer();
