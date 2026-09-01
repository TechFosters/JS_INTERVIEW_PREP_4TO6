// console.log('Script Started')

// console.log(5+3);//async

// console.log('top-down fashion')
// console.log('Script ended')


console.log('Hello');
const data = fetch('https://fakestoreapi.com/products')
console.log(data)
console.log('Byee');

data.then((d)=>console.log(d));
