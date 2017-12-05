// console.log("Starting notes.js");

//Libs
const fs = require("fs");

const fetchNotes = () => {
	try {
		var notesString = fs.readFileSync("notes-data.json");
		// We need to parse the JSON to view the content
		return JSON.parse(notesString);
	} catch (error) {
		console.log(error);
		return [];
	}
};

const saveNotes = notes => {
	// We need to stringify it to save it to the JSON
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
	var notes = fetchNotes();
	const note = {
		title: title,
		body: body
	};

	// Checking if there is any duplicate note with the same title
	const duplicateNotes = notes.filter(note => note.title === title);
	if (duplicateNotes.length === 0) {
		// Adding the note object to the notes array if that's a new note
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

const getAll = () => {
	return fetchNotes();
};

const getNote = title => {
	var notes = fetchNotes();
	const readNotes = notes.filter(note => note.title === title);
	return readNotes[0];
};

const removeNote = title => {
	var notes = fetchNotes();
	// We are creating a new array without the title added to remove
	const filteredNotes = notes.filter(note => note.title !== title);
	saveNotes(filteredNotes);

	// If this returns true that means we deleted a note, if false we haven't deleted antything
	return notes.length !== filteredNotes.length;
};

const logNote = note => {
	console.log("---");
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports = {
	addNote: addNote,
	getAll: getAll,
	getNote: getNote,
	removeNote: removeNote,
	logNote: logNote
};
