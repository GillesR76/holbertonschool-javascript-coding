const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('./database.csv')
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(1245, () => {
  console.log('Application est lancée sur le port 1245');
});

module.exports = app;
