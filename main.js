const http = require("http");
const CustomModule = require("./custom-module");

http.createServer(function (request, response) {

  // Gui HTTP header cua request
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Gui phan than cua response, bao gom "Hello World"
  response.end(CustomModule.plus(10, 5));
}).listen(3000);

// Man hinh Console se in thong bao
console.log('Server running at http://127.0.0.1:3000/');