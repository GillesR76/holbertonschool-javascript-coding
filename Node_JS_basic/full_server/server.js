const express = require('express');
const indexRoutes = require('./routes/index');

const app = express();

app.use('/', indexRoutes);

app.listen(1245, () => {
  console.log('Application est lancée sur le port 1245');
});

module.exports = app;
