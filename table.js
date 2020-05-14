const Automerge = require('automerge')

let database = Automerge.change(Automerge.init(), doc => {
    doc.authors = new Automerge.Table()
    doc.publications = new Automerge.Table()

    // Automerge.Table.add() inserts a new row into the database
    // and returns the primary key (unique ID) of the new row
    const martinID = doc.authors.add({ surname: 'Kleppmann', forename: 'Martin' })

    // Adding a publication that references the above author ID
    const ddia = doc.publications.add({
        type: 'book',
        authors: [martinID],
        title: 'Designing Data-Intensive Applications',
        publisher: "O'Reilly Media",
        year: 2017
    })
})

// Array of row objects
console.log(database.publications.rows);
console.log(database.publications.rows.length);


// Array of row IDs (primary keys)
console.log(database.publications.ids);
console.log(database.publications.ids.length);


// Looking up a row by primary key
console.log(database.publications.byId(database.publications.ids[0]));

// Number of rows in the table
console.log(database.publications.count);

// Like "SELECT * FROM publications WHERE title LIKE 'Designing%'"
console.log(database.publications.filter(pub => pub.title.startsWith('Deigning')));

// Like "SELECT publisher FROM publications"
console.log(database.publications.map(pub => pub.publisher));
