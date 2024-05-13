#!/usr/bin/node

const fs = require('fs');
// imports the built-in Node.js 'fs' (file system) module.

const filePath = process.argv[2];

// calling the readFile functionfrom the fs module
// It reads a file with the provided file path
// It then calls the provided callback function
// with two arguments: an error object and the
// data from the file
fs.readFile(filePath, 'utf8', (err, data) => {
  // body of the callback funtion:
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
