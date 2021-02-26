const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs(hideBin(process.argv))
  .command({
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
    handler(argv) {
      notes.addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.removeNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "List all notes",
    handler() {
      notes.listNotes();
    },
  })
  .command({
    command: "read",
    describe: "Read a note",
    builder: {
      title: {
        describe: "Title of note to read",
        demandOption: true,
        type: "string"
      }
    },  
    handler(argv) {
      notes.readNote(argv.title);
    },
  }).argv;

yargs.parse();
