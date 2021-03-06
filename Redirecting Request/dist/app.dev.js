"use strict";

var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req, res) {
  // console.log(req.url, req.method, req.headers);
  var url = req.url;
  var method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter the Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});
server.listen(3003);