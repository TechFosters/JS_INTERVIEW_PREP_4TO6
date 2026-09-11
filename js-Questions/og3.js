const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout 1"), 0);
    setImmediate(() => console.log("Immediate 1"));
});

fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout 2"), 0);
    setImmediate(() => console.log("Immediate 2"));
});

console.log("Sync");