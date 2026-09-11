const https = require('https');

console.log("1: Start");

https.get('https://example.com', (res) => {
    console.log("2: HTTPS response");
    setTimeout(()=>{
        console.log("4: Inside http setTimeout");
    },0)
    
});

console.log("3: End");

// 1 3 2 4
