const fs = require("fs");
const chalk = require("chalk");

const addNote = (title: string, body: string): void => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note: { title: string; }) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title: string): void => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note: { title: string; }) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = (): void => {
  const notes = loadNotes();
  console.log(chalk.inverse("List notes"));

  notes.forEach((note: { title: string; }) => {
    console.log(note.title);
  });
};

const readNote = (title: string): void => {
  const notes = loadNotes();
  const note = notes.find((note: { title: string; }) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveNotes = (notes: string) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
