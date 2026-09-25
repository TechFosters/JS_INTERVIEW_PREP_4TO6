const searchBtn = document.getElementById('btn')
const paraDisplay = document.getElementById('disp')
const inputBar = document.getElementById('inputBar')
console.log("han bhyi inputbar", inputBar)

console.log("searchBtn: ", searchBtn);

// async function onSearch(){
//    const artistName = inputBar.value
//    console.log("kaun artist ho bey....", artistName)
//    const apiResponse = await fetch(`https://itunes.apple.com/search?term=${artistName}`)
//    const apiData = await apiResponse.json()

//    console.log("yeh api data aaya...",apiData)
//    paraDisplay.innerText=`got results ${apiData.resultCount} on api call`
// }


function debounce(fn, delay){
    let timer;
    return function(...args){ //rest operator []
        clearTimeout(timer)
        timer= setTimeout(()=>{
            fn(...args) //spread operator unpack
        }, delay)
    }
}
/*
async function onSearch(e){
    // console.log("event ji prakat ho", e.target)
    
    console.log("value by gyan", e)
    const apiResponse = await fetch(`https://itunes.apple.com/search?term=${e.target.value}`)
    const apiData = await apiResponse.json()
    console.log("yeh api data aaya...",apiData)
}
// searchBtn.addEventListener('click', onSearch)



const debouncedSearch = debounce(onSearch, 500)

console.log("debouncedSearch function: ", debouncedSearch)
// inputBar.addEventListener('input', onSearch)
inputBar.addEventListener('input', debouncedSearch)
*/
const obj ={
    name: "Search",
    query: "",
    search(e){
        this.query = e.target.value;
        console.log(this.name, "----", this.query)
    }

}


obj.debouncedSearch = debounce(obj.search, 500)
inputBar.addEventListener('input', obj.debouncedSearch)

//1. this ki problem
//2. setTimeout me arrow fn ki jgh fn declartion use kru hojaega kaam?
//3. solution iska fix?