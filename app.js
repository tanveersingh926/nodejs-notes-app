const yargs = require("yargs");
const chalk = require("chalk");
const getNotes = require("./notes.js");
const msg = getNotes();

yargs.version("1.1.0");

// Create a add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note");
  }
});

// Create a remove command
yargs.command({
  command: "remove",
  describe: "Remove note",
  handler: function() {
    console.log("Removing a note");
  }
});

// Create a list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function() {
    console.log("List all notes");
  }
});

// Create a read command
yargs.command({
  command: "read",
  describe: "Read notes",
  handler: function() {
    console.log("Read notes");
  }
});

console.log(yargs.argv);
