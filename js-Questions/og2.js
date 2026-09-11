const fs = require('fs');

setImmediate(() => console.log("1: Outer Immediate"));

fs.readFile(__filename, () => {
    console.log("2: fs callback");
    setImmediate(() => console.log("3: Inner Immediate"));
});

console.log("4: Sync");