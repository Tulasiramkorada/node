const http = require('http');
// const routes = require('./routes');
const express = require('express');

// console.log(routes.someText);
const app = express();

app.use((req, res, next) => {
  console.log('in the middleware!');
})

const server = http.createServer(app);
   
server.listen(3000);  
