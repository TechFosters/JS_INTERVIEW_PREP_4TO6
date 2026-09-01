const fs = require('fs');

// fs.mkdir('data/backup/2026',{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('dir created succesfully')
//     }
// })


function promisifiedMakeDir(path){
    return new Promise((resolve, reject)=>{
        fs.mkdir(path, {recursive: true}, (err, path)=>{
            if(err){
                reject(err)
            }else{
                resolve(path)
            }
        })
    })
}

promisifiedMakeDir('tanish/backup/2026')
.then((dir)=>console.log("DIRECTORY...", dir))
.catch((err)=>console.log(err));