const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout"), 0);
    setImmediate(() => console.log("Immediate"));
});

console.log("Sync");