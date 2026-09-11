const fs = require('fs');

function readFilePromise(path) {
    return new Promise((resolve) => {
        fs.readFile(path, () => resolve("File read done"));
    });
}

async function run() {
    console.log("A: Before read");
    const result = await readFilePromise(__filename);
    console.log("B:", result);
    setTimeout(() => console.log("C: Timeout"), 0);
    setImmediate(() => console.log("D: Immediate"));
}

run();
console.log("E: Sync end");