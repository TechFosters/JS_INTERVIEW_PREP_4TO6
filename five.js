const fs = require('fs')

function promisify(fn){
    return function(...args){
        return new Promise((resolve,reject)=>{
            fn(...args, (err, result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }
}


const readFilePro = promisify(fs.readFile);
const writeFilePro = promisify(fs.writeFile);
const unlinkPro = promisify(fs.unlink);

readFilePro('hello.txt', 'utf-8')
.then((data)=>writeFilePro('myback4.txt', data))
.then(()=>unlinkPro('hello.txt'))
.then(()=>console.log("Sb hogya ji..."))
.catch((e)=>console.log("error is: ", e))