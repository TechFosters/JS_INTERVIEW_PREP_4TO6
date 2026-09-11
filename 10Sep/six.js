const crypto = require('crypto');


for (let i = 1; i <= 6; i++) {
    crypto.pbkdf2('password', 'salt', 500000, 64, 'sha512', () => {
        console.log(`Task ${i} done`);
    });
}