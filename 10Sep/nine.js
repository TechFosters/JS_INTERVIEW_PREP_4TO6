const crypto = require('crypto');
const https = require('https');

console.log("1: Start");

process.nextTick(() => console.log("2: nextTick"));

crypto.pbkdf2('pass', 'salt', 100000, 64, 'sha512', () => {
    console.log("3: crypto callback");
    setImmediate(() => console.log("4: Immediate from crypto"));
});

//round trip DEL -> LKO -> DEL // REQ->  SERVER --> RES
https.get('https://example.com', () => {
    console.log("5: https callback");
    process.nextTick(() => console.log("6: nextTick from https"));
});

Promise.resolve().then(() => console.log("7: Promise"));

console.log("8: End");

//1 8 2 7 5 6 3 4 Gyan, Tanish, Tripti
// 1 8 2 7 3 4 5 6 