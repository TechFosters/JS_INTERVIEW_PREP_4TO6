const person1 = {
    name: 'Tanish',

}

const person2 = {
    name: 'Gyan',

}

const person3 = {
    name: 'Tripti',

}

const person4 = {
    name: 'Anshika',

}

// function greet(personObj){
//     console.log(`Hello ${personObj.name}`)
// }

// greet(person1)
// greet(person2)


function showStuff(){
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0])

    // console.log(arguments.map(x => x* 2))
}

showStuff(1,2,3)

/*
//=======NAIVE APPROACH============
function greetPerson1(){
    console.log(`Hello ${person1.name}`)
}

function greetPerson2(){
    console.log(`Hello ${person2.name}`)
}


greetPerson1();
greetPerson2();


===============

const person1 = {
    name: 'Tanish',
    greet: function(){
    
        console.log(`Hello ${this.name}`)
    }
}

const person2 = {
    name: 'Gyan',
    greet: function(){ 
        console.log(`Hello ${this.name}`)
    }
}

person2.greet() //this.someMethod()  // obj.someMethod() //person2.greet()
person1.greet()
*/

function greet(){
    console.log(`Hello ${this.name}`)

}

//ye nahi chlkega kyoki greet prop h hi nahi in objects ki
// person1.greet()
// person2.greet()

greet.call(person1) //kis object par ye method call krna hai
greet.call(person2)

console.log(person1)

//call ne temporrarily greet fn ko hmaare objects par avialble krvaya

Function.prototype.myCall = function(context){
    console.log(this); //greetFn

    context.tempFn = this;
    

    const result = context.tempFn();

    delete context.tempFn
    return result;

}

greet.myCall(person4)  // this.someMethod
greet.myCall(person3)

greet.apply(person4)

//apply vaal khud se likh kete hai