var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
  
    // The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    /*Use the url module to turn the querystring into an object:*/
    var queryParams = url.parse(req.url, true).query;

    res.write('Hello World!'+'<BR/>'); //write a response to the client
    res.write(req.url+'<BR/>');        // Holds the part that comes after the domain name
    res.write(JSON.stringify(queryParams)+'<BR/>');
    res.end();                 //end the response

}).listen(8080); //the server object listens on port 8080