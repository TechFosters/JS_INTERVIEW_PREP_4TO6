class MyPromise{

    constructor(executor){

        this.state = "PENDING⏳";
        this.value = undefined;
        this.reason = undefined;


        const resolve = (value)=>{
            if(this.state === 'PENDING⏳'){
            this.state = "FULFILLED✅";
            this.value = value;
            }
        }

        const reject = (reason)=>{
            if(this.state === 'PENDING⏳'){
            this.state = "REJECTED❌";
            this.reason = reason
            }
        }

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled, onRejected){
        if(this.state === 'FULFILLED✅'){
            onFulfilled(this.value)
           
        }else if(this.state === 'REJECTED❌'){
            onRejected(this.reason)
       
        }
    }
}

//--actual js promise--

// const p0 = new Promise()

// const p1 = new MyPromise((resolve, reject)=>resolve('EXECUTOR'));

// const p2 = new MyPromise((res, rej)=>{
//     setTimeout(()=>{
//         res("ASYNC EXECUTOR")
//     }, 2*1000)
// })
// console.log(p2)

// setTimeout(()=>{
//     console.log(p2)
// }, 3*1000)
// console.log(p1)

// const p3 = new MyPromise((res, rej)=>{
//     res("Resolve hua mai")
//     rej("Kuch to gdbd hai")
// })

// console.log(p3);

// const p4 = new MyPromise((res, rej)=>{
//     setTimeout(()=>{
//         res("2 sec hogye...")
//     }, 2000)
// })

// console.log(p4.value)

// const p4 = new Promise((res, rej)=>{
//     res("Mai hu asli resolve");
//     rej("mai hu asli reject")
// })

// console.log(p4)

const pro6 = new MyPromise((res, rej)=>{
setTimeout(()=>{
    res("AAYA MAI AAYA 3 SEC BAAD")
}, 3000)
})

console.log(pro6)
console.log(pro6.value)
pro6
.then((val)=>console.log("Hello", val))

