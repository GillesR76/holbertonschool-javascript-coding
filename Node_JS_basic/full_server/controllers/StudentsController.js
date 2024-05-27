const readDatabase = require("../utils");

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase("./database.csv")
      .then((data) => {
        let output = "This is the list of our students\n";
        const fields = Object.keys(data).sort((a, b) =>
          a.localeCompare(b, "en", { sensitivity: "base" })
        );
        for (const field of fields) {
          output += `Number of students in ${field}: ${
            data[field].length
          }. List: ${data[field].join(", ")}\n`;
        }
        res.status(200).send(output);
      })
      .catch(() => {
        res.status(500).send("Cannot load the database");
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!["CS", "SWE"].includes(major)) {
      res.status(500).send("Major parameter must be CS or SWE");
      return;
    }
    readDatabase(process.argv[2])
      .then((data) => {
        if (!data[major]) {
          res.status(500).send("Major not found");
          return;
        }
        const output = `List: ${data[major].join(", ")}`;
        res.status(200).send(output);
      })
      .catch(() => {
        res.status(500).send("Cannot load the database");
      });
  }
}

module.exports = StudentsController;
