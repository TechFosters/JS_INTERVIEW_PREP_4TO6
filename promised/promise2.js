class MyPromise{

    constructor(executor){

        this.state = "PENDING";
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        
        const resolve = (value)=>{
            if(this.state === 'PENDING'){
            this.state = "FULFILLED";
            this.value = value;
            this.onFulfilledCallbacks.forEach(fn => fn(value)) 
                /*

                ()=>{
                    const result = onFulfilled(this.value) //(val)=>val * 2
                    resolve(result)
                }
                */

            this.onFulfilledCallbacks= [] 
            }
        }

        const reject = (reason)=>{
            if(this.state === 'PENDING'){
            this.state = "REJECTED";
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fn => fn(reason))
            }
        }
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
}

    //  then(onFulfilled, onRejected){
    //     if(this.state === 'FULFILLED'){
    //         onFulfilled(this.value)
    //     }else if(this.state ==='REJECTED'){
    //         onRejected(this.reason) //undefined
    //     }else{
    //         this.onFulfilledCallbacks.push(onFulfilled);
    //         this.onRejectedCallbacks.push(onRejected);
    //     }
    // }

    then(onFulfilled, onRejected){
        return new MyPromise((resolve, reject)=>{

            
            if(this.state === 'FULFILLED'){
                setTimeout(()=>{
                    const result = onFulfilled(this.value) // (val)=>val+1 //p2 ka bhi: console.log("answr is:...",ans)
                    resolve(result) //resolve(0)
                },0)
                
            }else if(this.state === 'REJECTED'){
                // 
                //
            }else{
                this.onFulfilledCallbacks.push(()=>{
                    const result = onFulfilled(this.value)
                    resolve(result)
                })
            }

        })
    }
}

// const p0 = new MyPromise((resolve, reject)=>reject("Reason to reject")) 

// p0
// .then((val)=>console.log(val));

// const p1 = new MyPromise((res, rej)=>{
//     setTimeout(()=>{
//         res("I take min of 3 sec to appear")
//     }, 3000)
// })

// console.log(p1.onFulfilledCallbacks)
// p1
// .then((val)=>console.log(val))

// console.log(p1.onFulfilledCallbacks)

// p1
// .then((val)=>console.log("val is: ", val))

// console.log(p1.onFulfilledCallbacks)






// const p2 = new MyPromise((res,rej)=>{
//     res(-1);
// })


// p2
// .then((val)=>val+1) //eak naYA PROMISE RETURN KRDIYA HAI JISKO HMNE BOLA THA P2KA BHAI
// .then((ans)=>console.log("answr is:...",ans))

// console.log("p2resovedVlaue is: ", p2ResolvedValue);

// const p5 = new MyPromise((res, rej)=>{
//     setTimeout(()=>{
//         res(5);
//     },3000)
// })

// p5
// .then((val)=>val * 2)
// .then((ans)=>console.log(ans))

console.log('HELLO JI ')
const p7 = new MyPromise((res,rej)=>res(45));
p7.then((ans)=>console.log(ans))
console.log('ghar jaane ka time horha hai')

