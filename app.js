const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

function stackTrace() {
var err = new Error();
console.log(err.stack);
}

server.listen(port, hostname, () => {
  stackTrace()
  console.log(`Server running at http://${hostname}:${port}/`);
});
