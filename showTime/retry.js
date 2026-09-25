async function retryWithFetch(url, retries = 3){

    for(let i  = 0 ; i < retries; i++){
        try {
            console.log(`ths is  my ${i}th attempt` )
            const response = await fetch(url)
            if(!response.ok){
                throw new Error("Error while trying fetch call", response.status)
            }
            return await response.json() //call hua hi nahi?
        } catch (error) {
            
            if(i === retries){
                throw error
            }

            const delay = 1000 * (2 ** i)

            await new Promise((resolve)=>setTimeout(()=>{
                resolve()
            },delay) )
        }
    }

}



retryWithFetch('https://itunes.appl.com/search?term=sonu+nigam')
.then((res)=>console.log(res))
.catch((e)=>console.log(e))