const crypto = require('crypto');

console.log("1: Start");

//password based key derivative function 2: cpu heavy
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log("2: Hashing done");
});


console.log("3: End");