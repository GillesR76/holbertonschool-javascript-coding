const express = require('express');
const index = require('./routes/index');

const app = express();

app.use(index);

app.listen(1245, () => {
  console.log('Application est lancée sur le port 3000');
});

module.exports = app;
