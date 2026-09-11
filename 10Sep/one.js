const fs = require('fs');

fs.readFile(__filename, () => {
    console.log("1: fs callback");

    setTimeout(() => console.log("2: Timeout"), 0);
    setImmediate(() => console.log("3: Immediate"));
    process.nextTick(() => console.log("4: nextTick"));
    Promise.resolve().then(() => console.log("5: Promise"));

    console.log("6: fs callback end");
});

console.log("7: Sync");


//7  1  6  4  5  3 2 ->Gyan, Tripti, Suraj