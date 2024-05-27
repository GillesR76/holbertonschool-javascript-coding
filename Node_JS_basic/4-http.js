const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Application est lancée sur le port 3000');
});

module.exports = app;
