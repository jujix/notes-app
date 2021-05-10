const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list your notes",
  handler: function () {
    console.log("Listing out all note");
  },
});

yargs.command({
  command: "read",
  describe: "read your notes",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();