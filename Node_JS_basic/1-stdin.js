const readline = require('readline');

const talk = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

talk.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}!`);
  talk.close();
});

talk.on('close', () => {
  console.log('This important software is now closing');
});
