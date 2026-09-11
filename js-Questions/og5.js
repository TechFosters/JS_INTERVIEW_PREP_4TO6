const fs = require('fs');

async function main() {
    console.log("1: main start");
    
    process.nextTick(() => console.log("2: nextTick outer"));
    
    await new Promise((resolve) => {
        fs.readFile(__filename, () => {
            console.log("3: fs callback");
            resolve();
        });
    });
    
    console.log("4: after await");
    
    setTimeout(() => console.log("5: Timeout"), 0);
    setImmediate(() => console.log("6: Immediate"));
    
    Promise.resolve().then(() => console.log("7: Promise inside main"));
}

main();

Promise.resolve().then(() => console.log("8: Promise outer"));

console.log("9: Sync end");