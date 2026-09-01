//module: file system

//read a file -> copy its contents myBackupFile.txt -> og file delete

const fs = require('fs')

// console.log("Start")
// const contnet = fs.readFileSync('main.txt', 'utf-8')
// console.log(contnet);
// console.log("End")

//async

fs.readFile('main.txt', 'utf-8', (err, fileContent)=>{
    if(err){
        console.log("Error while reading the file", err)
    }else{
        console.log(fileContent);
        fs.writeFile('myBackupFile.txt', fileContent, (err)=>{
            if(err){
                console.log("Error while writing file", err)

            }else{
                fs.unlink('main.txt', (err)=>{
                    if(err){
                        console.log("Error while deleting the file")
                    }else{
                        console.log("All tasks done successfully!")
                    }
                })
            }
        })
    }
})