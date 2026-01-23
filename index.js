const http = require('http');

const VERSION = process.env.APP_VERSION || "dev";

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    app: "demo-app",
    version: VERSION,
    timestamp: new Date().toISOString()
  }));
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
