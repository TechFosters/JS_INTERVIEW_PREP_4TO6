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


