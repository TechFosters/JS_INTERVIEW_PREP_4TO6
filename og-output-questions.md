# JS Event Loop --Output-Based Questions (Only)
### setTimeout : Promise : queueMicrotask : process.nextTick : fs : http : DOM

Predict the output of each block.

---

## ⚠️ Environment Note

| API | Kahan Chalta Hai |
|---|---|
| `setTimeout`, `Promise`, `queueMicrotask` | Browser AUR Node.js |
| `process.nextTick` | Sirf Node.js |
| `fs` (file system) | Sirf Node.js |
| `http`/`https` module | Sirf Node.js |
| DOM events | Sirf Browser |

---

# LEVEL 1 --setTimeout Basics

## Q1
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```

## Q2
```js
setTimeout(() => console.log("A"), 100);
setTimeout(() => console.log("B"), 0);
console.log("C");
```

## Q3
```js
console.log("Start");
setTimeout(() => {
    console.log("Timer 1");
    setTimeout(() => console.log("Timer 2"), 0);
}, 0);
console.log("End");
```

---

# LEVEL 2 --setTimeout + Promise Mix

## Q4
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

## Q5
```js
const p = new Promise((resolve) => {
    console.log("Executor");
    resolve();
});

setTimeout(() => console.log("Timeout"), 0);

p.then(() => console.log("Then"));

console.log("Sync end");
```

## Q6
```js
setTimeout(() => console.log("1"), 0);

Promise.resolve().then(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 0);
});

console.log("4");
```

---

# LEVEL 3 --`queueMicrotask`

## Q7
```js
console.log("1");

queueMicrotask(() => console.log("2"));

console.log("3");
```

## Q8
```js
console.log("1");

setTimeout(() => console.log("2"), 0);

queueMicrotask(() => console.log("3"));

Promise.resolve().then(() => console.log("4"));

console.log("5");
```

## Q9
```js
function processData() {
    console.log("Processing");
    queueMicrotask(() => console.log("Cleanup"));
    return "Result";
}

console.log("Start");
console.log(processData());
console.log("End");
```

---

# LEVEL 4 --`process.nextTick` (Node.js Only)

## Q10
```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

process.nextTick(() => console.log("4"));

console.log("5");
```

## Q11
```js
process.nextTick(() => {
    console.log("1");
    process.nextTick(() => console.log("2"));
});

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

## Q12
```js
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
Promise.resolve().then(() => console.log("Promise"));
process.nextTick(() => console.log("nextTick"));
queueMicrotask(() => console.log("queueMicrotask"));
console.log("Sync");
```

## Q13
```js
function recursiveNextTick(count) {
    if (count <= 0) return;
    process.nextTick(() => {
        console.log("Tick", count);
        recursiveNextTick(count - 1);
    });
}

recursiveNextTick(3);

setTimeout(() => console.log("Timeout"), 0);

console.log("Sync");
```

---

# LEVEL 5 --`fs` Module (Node.js Only)

## Q14
```js
const fs = require('fs');

console.log("1");

fs.readFile(__filename, () => {
    console.log("2: File read complete");
});

console.log("3");
```

## Q15
```js
const fs = require('fs');

fs.readFile(__filename, () => {
    console.log("1: fs callback");
});

setTimeout(() => console.log("2: setTimeout"), 0);

Promise.resolve().then(() => console.log("3: Promise"));

console.log("4: Sync");
```

## Q16
```js
const fs = require('fs');

fs.readFile(__filename, () => {
    console.log("1: fs callback start");
    Promise.resolve().then(() => console.log("2: Microtask inside fs callback"));
    process.nextTick(() => console.log("3: nextTick inside fs callback"));
    console.log("4: fs callback end");
});

console.log("5: Sync");
```

---

# LEVEL 6 --`http` Module (Node.js Only)

## Q17
```js
const http = require('http');

console.log("1: Start");

http.get('http://example.com', (res) => {
    console.log("2: HTTP response received");
});

setTimeout(() => console.log("3: Timeout"), 0);

console.log("4: End");
```

## Q18
```js
console.log("1");

fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => console.log("2: Data received"));

setTimeout(() => console.log("3: Timeout"), 0);

console.log("4");
```

---

# LEVEL 7 --DOM Events (Browser Only)

## Q19
```js
console.log("1");

document.getElementById('myButton').addEventListener('click', () => {
    console.log("2: Button clicked");
});

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

## Q20
```js
document.getElementById('myButton').addEventListener('click', () => {
    console.log("1: Click handler start");
    Promise.resolve().then(() => console.log("2: Microtask in click"));
    console.log("3: Click handler end");
});

console.log("4: Script loaded");
```

---

# LEVEL 8 --Mega Mixed Questions

## Q21
```js
console.log("1");

setTimeout(() => console.log("2"), 0);

setImmediate(() => console.log("3"));

Promise.resolve().then(() => console.log("4"));

process.nextTick(() => console.log("5"));

queueMicrotask(() => console.log("6"));

console.log("7");
```

## Q22
```js
console.log("1");

setTimeout(() => console.log("2"), 0);

new Promise((resolve) => {
    console.log("3");
    resolve();
}).then(() => {
    console.log("4");
    queueMicrotask(() => console.log("5"));
});

queueMicrotask(() => console.log("6"));

console.log("7");
```

## Q23
```js
const fs = require('fs');

async function readAndProcess() {
    console.log("1: Function start");
    process.nextTick(() => console.log("2: nextTick"));
    await Promise.resolve();
    console.log("3: After await");
}

readAndProcess();

fs.readFile(__filename, () => {
    console.log("4: fs callback");
});

console.log("5: Sync end");
```