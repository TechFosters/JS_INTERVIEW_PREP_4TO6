const fs = require('fs/promises');


fs.readFile('hello.txt', 'utf-8')
.then((fileContent)=>{
    console.log(fileContent);
    return fs.writeFile('myBackupPro.txt', fileContent)
})
.then(()=>fs.unlink('hello.txt'))
.then(()=>console.log('All tasks done succesfully'))
.catch((err)=>console.log(err));

