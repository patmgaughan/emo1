var http = require('http');
var port = process.env.PORT || 3000;
console.log("This goes to the console window");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
   res.write("<h1>Stock Ticker</h1>");
   res.write ("<form>");
  res.write ("Search: <input type='text'>");
  res.write ("</form>");
   res.end();
}).listen(port);
