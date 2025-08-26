const http = require('http');
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

const requestListener = (req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({status: 'ok'}));
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    message: 'Hello from PlatformNEX Cloud Build test app!',
    path: req.url,
    time: new Date().toISOString()
  }));
};

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});