const http = require('http');
const router = require('./router');

const port = 8080;
const ip = '127.0.0.1';
const server = http.createServer(router.handleRequest);

process.stdout.write(`Listening on http://${ip}:${port}`);
server.listen(port, ip);
