const yargs = require("yargs");
const notes = require("./notes");

interface Argv {
  title: string,
  body: string
}


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
  handler(argv: Argv) {
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
  handler(argv: Argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list your notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "read your notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv: Argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
