const Automerge = require('automerge')

// Initialize documents with known actor IDs
let doc1 = Automerge.change(Automerge.init('actor-3'), doc => {
    doc.x = 1
})
let doc2 = Automerge.change(Automerge.init('actor-2'), doc => {
    doc.x = 2
})
doc1 = Automerge.merge(doc1, doc2)
doc2 = Automerge.merge(doc2, doc1)

// Now, doc1 might be either {x: 1} or {x: 2} -- the choice is random.
// However, doc2 will be the same, whichever value is chosen as winner.
// assert.deepEqual(doc1, doc2)

console.log(doc1, doc2);

console.log(Automerge.getConflicts(doc1, 'x'));

doc1 = Automerge.change(doc1, doc => {
    doc.x = 3
})

console.log(Automerge.getConflicts(doc1, 'x'));
