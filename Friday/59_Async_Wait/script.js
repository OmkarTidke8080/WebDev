async function harry(){
    let DelhiWeather = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("27 deg ")
    }, 3000);
})


let BangaloreWeather = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("21 deg ")
    }, 5000);
})

// DelhiWeather.then(alert)
// BangaloreWeather.then(alert)

console.log("Fetching delhi weather Please Wait...")
let delhiW = await DelhiWeather
console.log("Delhi's weather has been fetched : "+delhiW)


console.log("Fetching bangalore weather please wait")
let BangaloreW = await BangaloreWeather
console.log("Bangalore's weather has been fetched : "+BangaloreW)
return [delhiW,BangaloreW]

}

const cherry = async ()=>{
    console.log("Hey I am cherry")
}

const main1 = async ()=>{



console.log("Welcoe to weathe control room")
let a = await harry()
let b = await cherry()

}

main1()