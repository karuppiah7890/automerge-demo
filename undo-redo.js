const Automerge = require('automerge')

let doc = Automerge.change(Automerge.init(), doc => {
    doc.birds = []
})
console.log(doc);

doc = Automerge.change(doc, doc => {
    doc.birds.push('blackbird')
})
console.log(doc);

doc = Automerge.change(doc, doc => {
    doc.birds.push('robin')
})
// now doc is {birds: ['blackbird', 'robin']}
console.log(doc);


Automerge.canUndo(doc) // returns true
doc = Automerge.undo(doc) // now doc is {birds: ['blackbird']}
console.log(doc);

doc = Automerge.undo(doc) // now doc is {birds: []}
console.log(doc);

doc = Automerge.redo(doc) // now doc is {birds: ['blackbird']}
console.log(doc);

doc = Automerge.redo(doc) // now doc is {birds: ['blackbird', 'robin']}
console.log(doc);
