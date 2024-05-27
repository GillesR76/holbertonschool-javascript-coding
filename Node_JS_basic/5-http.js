const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.end('Page not found');
  }
});

app.listen(1245, () => {
  console.log('Application est lancée sur le port 3000');
});

module.exports = app;
