let a = fetch("https://goweather.herokuapp.com/weather/India")

// a.then((value1)=>{
//     // return value1.json()
    
// }).then((value2)=>
// {
//     console.log(value2)
// })

a.then((response)=>{
    // return value1.json()
    console.log(response.status)
    // console.log(response.ok)
    console.log(response.headers)
    // console.log(resonse.text()) // generate error
    return resonse.json()

}).then((value2)=>
{
    console.log(value2)
})