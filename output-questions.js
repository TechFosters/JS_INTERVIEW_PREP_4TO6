// ============================================================
// TechFosters' Output-Based Questions — setTimeout -> Callback -> Promise
// Predict the output of each block, then run it to check.
// ============================================================


// ---------- SECTION 1: setTimeout ----------

// Q1
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");


// Q2
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");


// Q3
setTimeout(() => console.log("A"), 200);
setTimeout(() => console.log("B"), 100);
setTimeout(() => console.log("C"), 0);
console.log("D");


// Q4
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
    setTimeout(() => console.log("Timeout 2"), 0);
}, 0);

console.log("End");


// Q5
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 0);
}
console.log("Done");


// ---------- SECTION 2: Callbacks ----------

// Q6
function greet(callback) {
    console.log("Hello");
    callback();
}

greet(() => console.log("Callback chala"));
console.log("End");


// Q7
function processOrder(callback) {
    setTimeout(() => {
        console.log("Order processed");
        callback();
    }, 1000);
}

processOrder(() => console.log("Callback executed"));
console.log("Main code done");


// Q8
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1");
        callback();
    }, 100);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2");
        callback();
    }, 50);
}

step1(() => {
    step2(() => {
        console.log("All done");
    });
});

console.log("Started");


// Q9
function buggyLibrary(callback) {
    callback("First call");
    setTimeout(() => callback("Second call"), 0);
}

let count = 0;
buggyLibrary((msg) => {
    count++;
    console.log(msg, "- Count:", count);
});

console.log("Sync code done");


// Q10
console.log("1");

function delayedGreet(name, callback) {
    setTimeout(() => {
        callback(`Hello ${name}`);
    }, 500);
}

delayedGreet("Rohan", (msg) => {
    console.log(msg);
    setTimeout(() => console.log("Follow-up message"), 0);
});

console.log("2");


// ---------- SECTION 3: Promises ----------

// Q11
console.log("1");
Promise.resolve().then(() => console.log("2"));
console.log("3");


// Q12
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");


// Q13
const p = new Promise((resolve) => {
    console.log("Executor");
    resolve("Done");
});

console.log("Sync");

p.then((val) => console.log(val));


// Q14
setTimeout(() => console.log("1"), 0);

new Promise((resolve) => {
    setTimeout(() => resolve("2"), 0);
}).then((res) => console.log(res));

console.log("3");


// Q15
console.log("1");

setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => console.log("3"));
}, 0);

Promise.resolve().then(() => console.log("4"));

console.log("5");


// Q16
function delay(value, ms) {
    return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function run() {
    console.log("A");
    const val = await delay("B", 1000);
    console.log(val);
    console.log("C");
}

console.log("Start");
run();
console.log("End");


// Q17
async function first() {
    console.log("A");
    await second();
    console.log("B");
}

async function second() {
    console.log("C");
}

console.log("Start");
first();
setTimeout(() => console.log("Timeout"), 0);
console.log("End");


// Q18
console.log("1");

new Promise((resolve) => {
    console.log("2");
    setTimeout(() => {
        resolve("3");
    }, 0);
}).then((val) => {
    console.log(val);
    return new Promise((resolve) => {
        setTimeout(() => resolve("4"), 0);
    });
}).then((val) => console.log(val));

setTimeout(() => console.log("5"), 0);

console.log("6");


// Q19
const p1 = Promise.resolve("A");
const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 100));
const p3 = Promise.reject("C");

Promise.allSettled([p1, p2, p3]).then((results) => {
    console.log(results.map(r => r.status));
});

setTimeout(() => console.log("Timer done"), 50);

console.log("Sync end");


// Q20
async function taskA() {
    console.log("A start");
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log("A end");
}

async function taskB() {
    console.log("B start");
    await new Promise((resolve) => setTimeout(resolve, 50));
    console.log("B end");
}

console.log("Main start");
taskA();
taskB();
console.log("Main end");


// Q21
const p = Promise.resolve("Data");

p.finally(() => console.log("1: finally"));
p.then((val) => console.log("2: then:", val));
p.catch((err) => console.log("3: catch"));
p.then((val) => console.log("4: then again:", val));


// Q22
const p = Promise.reject("Error!");

p.then((val) => console.log("1: then:", val));
p.finally(() => console.log("2: finally"));
p.catch((err) => console.log("3: catch:", err));


// Q23
const p = Promise.resolve(1);

// Version A: CHAINED
p.then((val) => val + 1).then((val) => console.log("Chained:", val));

// Version B: SEPARATE (dono SAME p pe)
p.then((val) => console.log("Separate 1:", val));
p.then((val) => console.log("Separate 2:", val));


// Q24
console.log("1");

setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => console.log("3"));
}, 0);

new Promise((resolve) => {
    console.log("4");
    resolve();
}).then(() => {
    console.log("5");
    setTimeout(() => console.log("6"), 0);
});

console.log("7");


// Q25
async function test() {
    console.log("A");
    await null;
    console.log("B");
    await null;
    console.log("C");
}

console.log("1");
test();
console.log("2");


// Q26
Promise.resolve("Original")
    .finally(() => {
        console.log("Finally ran");
        return "Changed value";
    })
    .then((val) => console.log("Final value:", val));


// Q27
Promise.resolve("Original")
    .finally(() => {
        throw new Error("Finally failed");
    })
    .then((val) => console.log("Then:", val))
    .catch((err) => console.log("Caught:", err.message));


// Q28
function fakeAsyncOperation(callback) {
    console.log("Operation started");
    Promise.resolve().then(() => {
        callback("Result from callback");
    });
}

console.log("1");

fakeAsyncOperation((result) => {
    console.log(result);
});

console.log("2");


// Q29
async function inner() {
    console.log("Inner start");
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log("Inner end");
    return "Inner result";
}

async function outer() {
    console.log("Outer start");
    const result = await inner();
    console.log("Outer got:", result);
    console.log("Outer end");
}

console.log("Script start");
outer();
console.log("Script end");


// Q30
console.log("1");

const p1 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 1000));
const p2 = Promise.reject("Fast fail");

Promise.all([p1, p2])
    .then((results) => console.log("Then:", results))
    .catch((err) => console.log("Catch:", err));

console.log("2");


// Q31
console.log("1");

Promise.resolve()
    .then(() => {
        console.log("2");
        return new Promise((resolve) => setTimeout(resolve, 0));
    })
    .then(() => console.log("3"));

setTimeout(() => console.log("4"), 0);

console.log("5");


// Q32
async function getValue() {
    return 10;
}

const promise = getValue();

promise.then((val) => console.log("A:", val));
promise.then((val) => console.log("B:", val * 2));
console.log("C");


// Q33
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1");
        callback();
    }, 0);
}

console.log("Start");

step1(() => {
    console.log("Callback from step1");
    Promise.resolve().then(() => console.log("Microtask inside callback"));
});

setTimeout(() => console.log("Another timeout"), 0);

console.log("End");


// Q34
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve()
    .then(() => console.log("3"))
    .then(() => console.log("4"));

(async () => {
    console.log("5");
    await null;
    console.log("6");
})();

Promise.resolve().then(() => console.log("7"));

setTimeout(() => console.log("8"), 0);

console.log("9");