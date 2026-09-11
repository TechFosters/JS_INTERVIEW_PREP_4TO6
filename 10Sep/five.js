const crypto = require('crypto');

crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log("1: Hashing callback");
    setTimeout(() => console.log("2: Timeout"), 0);
    setImmediate(() => console.log("3: Immediate"));
});

console.log("4: Sync");