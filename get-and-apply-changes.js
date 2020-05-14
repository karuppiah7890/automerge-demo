const Automerge = require('automerge')

let currentDoc = Automerge.from({ birds: [] })

console.log(currentDoc);


let newDoc = Automerge.change(currentDoc, doc => {
    doc.birds.push('blackbird')
})

console.log(currentDoc);
console.log(newDoc);


let changes = Automerge.getChanges(currentDoc, newDoc)
console.log(JSON.stringify(changes))

let anotherNewDoc = Automerge.applyChanges(currentDoc, changes)

console.log(anotherNewDoc);

console.log(Automerge.diff(currentDoc, anotherNewDoc));
