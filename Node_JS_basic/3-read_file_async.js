const fs = require("fs");

function countStudents(path) {
  return fs.promises
    .readFile(path, "utf8")
    .then((data) => {
      const lines = data.split("\n");
      const students = lines.slice(1).filter((line) => line.length > 0); // filter out empty lines
      let output = `Number of students: ${students.length}\n`;
      const fields = {};
      for (const student of students) {
        const field = student.split(",")[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student.split(",")[0]);
      }
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          output += `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(", ")}\n`;
        }
      }
      return output;
    })
    .catch(() => {
      throw new Error("Cannot load the database");
    });
}

module.exports = countStudents;
