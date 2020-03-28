const fs = require("fs");
function getNotes() {
  const note = fs.readFileSync("notes.txt");
  return note.toString();
}

module.exports = getNotes;
