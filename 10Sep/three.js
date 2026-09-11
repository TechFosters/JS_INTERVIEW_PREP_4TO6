const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout 1"), 0);
    setImmediate(() => console.log("Immediate 1"));
});

fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout 2"), 0);
    setImmediate(() => console.log("Immediate 2"));
});
fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout 3"), 0);
    setImmediate(() => console.log("Immediate 3"));

    fs.readFile(__filename, ()=>{
    setTimeout(() => console.log("Timeout 4"), 0);
    setImmediate(() => console.log("Immediate 4"));
    })
    
});
console.log("Sync");

//Sync I1 T1 I2 T2 ->Tanish, Tripti
//Sync I1 I2 T1 T1 -> Gyan, Suraj