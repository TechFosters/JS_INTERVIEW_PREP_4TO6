const crypto = require('crypto');
const https = require('https');
//thread pool vs os
console.log("1: Start");

crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log("2: Heavy hash done");
});

https.get('https://example.com', () => {
    console.log("3: HTTPS response");
});

console.log("4: End");