var http = require('http');

var server = http.createServer(function(request, response){  
    response.writeHead(200, {'Content-type':'text/plan'});  
    response.write('Hello Node JS Server Response');
    response.end( );})

server.listen(process.env.PORT || 7000);
