const http = require('http');
const fs = require('fs');

const version = process.env.APP_VERSION || 'dev';

const server = http.createServer((req, res) => {
  if (req.url === '/version') {
    res.writeHead(200);
    res.end(version);
    return;
  }

  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading page');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log(`Demo app running on port 3000, version ${version}`);
});
