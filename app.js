// Requiring Node modules
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

// Requiring other JS
const notes = require("./notes.js");

const argv = yargs
	.command("add", "Add a new note", {
		title: {
			describe: "Title of note",
			demand: true,
			alias: "t"
		},
		body: {
			describe: "Body of note",
			demand: true,
			alias: "b"
		}
	})
	.command("list", "List all notes")
	.command("read", "Read a note", {
		title: {
			describe: "Title of note",
			demand: true,
			alias: "r"
		}
	})
	.command("remove", "Remove a note", {
		title: {
			describe: "Remove of note",
			demand: true,
			alias: "rm"
		}
	})
	.help().argv;
// console.log("Yargs", argv);

const command = argv._[0];
// console.log("Command:", command);

if (command === "add") {
	// The way yargs saves --title:secret is {title:"secret"} that's why we can reference it
	const note = notes.addNote(argv.title, argv.body);
	// We will get back undefined if the note can't be added to our notes list if it's a duplicate
	if (note !== undefined) {
		console.log("Note has been created");
		notes.logNote(note);
	} else {
		console.log("Note is a duplicate, try another title");
	}
} else if (command === "list") {
	const allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach(note => {
		notes.logNote(note);
	});
} else if (command === "read") {
	const note = notes.getNote(argv.title);
	if (note !== undefined) {
		console.log("Here is your note to read");
		notes.logNote(note);
	} else {
		console.log("Note is not found, try another title");
	}
} else if (command === "remove") {
	const noteRemoved = notes.removeNote(argv.title);
	const message = noteRemoved ? console.log("Note was removed") : console.log("Note not found");
} else {
	console.log("Command not recognized");
}
