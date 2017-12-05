# Node-Note
Simple note creating app on NodeJS

1. First ```npm install``` after cloning the directory in the terminal to install all the dependencies

2. Launch the app with ```node app.js``` from the directory

3. You can add the following commands for the app:
- Adding new note (example: ```node app.js add -t="The title of my new note" -b="This is the body of my note"```)
- Reading one specific note (```node app.js -r="title of the note"```)
- Removing a note (```node app.js -rm="title of the note"```)
- Listing out existing notes (```node app.js list```)

4. Ask for help with ```node app.js --help```


## Dependencies

* [fs](https://nodejs.org/api/fs.html) - Node core module

* [lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras.

* [yargs](https://www.npmjs.com/package/yargs) - Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
