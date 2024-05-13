#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const tasks = JSON.parse(body);
    const completedTasks = {};
    for (const task of tasks) {
      if (task.completed === true) {
        if (completedTasks[task.userId]) {
          completedTasks[task.userId]++;
        } else {
          completedTasks[task.userId] = 1;
        }
      }
    }
    for (const userId in completedTasks) {
      console.log(`${userId}: ${completedTasks[userId]}`);
    }
  }
});
