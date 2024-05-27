const fs = require("fs");

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.split("\n");
      const students = lines.slice(1).filter((line) => line.length > 0);
      const fields = {};
      for (const student of students) {
        const field = student.split(",")[3];
        const firstName = student.split(",")[0];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
