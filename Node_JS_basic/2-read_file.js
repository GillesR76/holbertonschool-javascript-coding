const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines
    .slice(1)
    .filter((line) => line)
    .map((line) => line.split(','));

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  for (const student of students) {
    const field = student[3];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(student[0]);
  }

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(
        `Number of students in ${field}: ${
          fields[field].length
        }. List: ${fields[field].join(', ')}`,
      );
    }
  }
}

module.exports = countStudents;
