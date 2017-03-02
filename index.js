
var http = require('http');

// var server = http.createServer(function(req,response){    
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write("<!DOCTYPE 'html'>");
//   response.write("<html>");
//   response.write("<head>");
//   response.write("<title>Hello World Page</title>");
//   response.write("</head>");
//   response.write("<body>");
//   response.write("Hello World!");
//   response.write("</body>");
//   response.write("</html>");
//   response.end();
// });


// var server = http.createServer();

// server.on("hi",function(req,res,net){
//         response.writeHead(200, {"Content-Type": "text/html"}); 
//         res.write("okey");
//         res.end();
// });

// server.on('upgrade', function(req, socket, head){
//   socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
//                'Upgrade: WebSocket\r\n' +
//                'Connection: Upgrade\r\n' +
//                '\r\n');

//   socket.pipe(socket); // echo back
// });

// server.listen(8080);

// http.createServer(function(request, response) {
//   var headers = request.headers;
//   var method = request.method;
//   var url = request.url;
//   var body = [];
//   request.on('error', function(err) {
//     console.error(err);
//   }).on('data', function(chunk) {
//     body.push(chunk);
//   }).on('end', function() {
//     body = Buffer.concat(body).toString();
//     // BEGINNING OF NEW STUFF

//     response.on('error', function(err) {
//       console.error(err);
//     });

//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'application/json');
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.writeHead(200, {'Content-Type': 'application/json'})

//     var responseBody = {
//       headers: headers,
//       method: method,
//       url: url,
//       body: body
//     };

//     response.write(JSON.stringify(responseBody));
//     response.end();
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.end(JSON.stringify(responseBody))

//     // END OF NEW STUFF
//   });
// }).listen(8080);


http.createServer(function(request, response) {
  var body = [];
  request.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    response.end(body);
  });
}).listen(8080);

var addModule = require('./app.js');

var ans = addModule.add(5,4);
console.log(ans);

