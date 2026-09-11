const crypto = require('crypto');
const https = require('https');
const { promisify } = require('util');

const pbkdf2Async = promisify(crypto.pbkdf2);

function fetchData(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => resolve("data"));
    });
}

async function fullFlow() {
    console.log("1: Flow start");

    process.nextTick(() => console.log("2: nextTick in flow"));

    const hash = await pbkdf2Async('pass', 'salt', 100000, 64, 'sha512');
    console.log("3: Hash ready");

    const data = await fetchData('https://example.com');
    console.log("4: Data ready:", data);

    setImmediate(() => console.log("5: Immediate at end"));
    setTimeout(() => console.log("6: Timeout at end"), 0);
}

fullFlow();

console.log("7: Sync end");


// 1 7  3 2  4 5 6 
// 1  7  3  4  2  5  6

// 1, 7, 2, 3, 4, 5, 6

//CALLSTACK: []


//[fullflow susepnded]