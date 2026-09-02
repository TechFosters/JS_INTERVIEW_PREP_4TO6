class Pro{

    constructor(executor){
        this.state = 'PENDING';
        this.value = undefined;
        this.reason = undefined;


        const resolve = (value)=>{
            if(this.state === "PENDING"){
            this.state = "FULFILLED"
            this.value = value;
            }
        }

        const reject = (reason)=>{
            if(this.state === "PENDING"){
                this.state = "REJECTED"
                this.reason = reason;
                }
        }

        executor(resolve, reject);
    }

    

}

const p5 = new Pro((res, rej)=>{
    res(10);
})

console.log(p5)