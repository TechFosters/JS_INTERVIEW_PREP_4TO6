const user = {

    name: 'sonu',
    greet: function(){
        console.log(`hello ${this.name}`)
    }
}

const user2 = {
    name: 'aryan'
}
/*
console.log(user.greet())

const user2 = {
    name: 'aryan'
}

const boundGreet = user.greet.bind(user2); // ye eak function return krta hai
boundGreet();
*/

/*
setTimeout(function(){
    user.greet() //draeback ki ye sirf user pe jab greet pda h to chelga user2 pe nahi chlega
}, 2000); 

setTimeout(function(){
    user.greet.apply(user2)
}, 2000); 
setTimeout(function(){
    user.greet.call(user2)
}, 2000); //

*/
Function.prototype.myBind = function(context){
    const fnToBind = this; //GREET
    return function(){
        context.tempFn = fnToBind; //GREET
        const result = context.tempFn() //undefined.tempFn()
        delete context.tempFn
        return result;
    }
}
// user.greet.bind(user2)();
const boundGreet = user.greet.myBind(user2); //this

boundGreet()

context.tempFn = this;
        const result = context.tempFn()
        delete context.tempFn
        return result;