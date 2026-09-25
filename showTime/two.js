const btn = document.getElementById('btn')

let itemCount = 0;

function throttle(fn, limit){
    let lastCall = 0
    return function(){
        const now = Date.now();
        console.log("lastCall", lastCall)
        console.log("now ", now)
        console.log("DIFF", now - lastCall)
        console.log("limit", limit)
        if(now - lastCall >= limit){
            lastCall = now;
            fn();
        }
        
    }
}
function placeOrder(){
    itemCount++;
    document.getElementById("count").innerText=itemCount
    console.log(`Order placed for # ${itemCount} @ ${new Date().toLocaleString()}`)
}

btn.addEventListener("click", throttle(placeOrder, 2000))