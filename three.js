const fs = require('fs')

function promisfiedReadFile(filePath, encoding){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, encoding, (err, fileContent)=>{
            if(err){
                reject(err)
            }else{
                resolve(fileContent)
            }
        })
    })
}

function promisifiedWriteFile(targetFilePath, fileContent){
    return new Promise((res, rej)=>{
        fs.writeFile(targetFilePath, fileContent, (err)=>{
            if(err){
                rej(err)
            }else{
                res();
            }
        })
    })
}

function promisfiedUnlinkFile(fileToBeUnlinked){
    return new Promise((resolve,reject)=>{
        fs.unlink(fileToBeUnlinked, (err)=>{
            if(err){
                reject(err)
            }else{
                resolve('File deleted successfully')
            }
        })
    })
}

// const result = promisfiedReadFile('myBackupPro.txt','utf-8');
// console.log(result);

promisfiedReadFile('myBackupPro.txt','utf-8')
.then((fc)=>{
    console.log("===file content===", fc)
    return promisifiedWriteFile('myBackup3.txt', fc)
})
.then(()=>promisfiedUnlinkFile('myBackupPro.txt'))
.then((ans)=>console.log(ans))
.catch((e)=>console.log(e))