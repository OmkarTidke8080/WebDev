// Scynchronous  programming

// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("Whta is Your Favorite color?");
// console.log(a + " is " +b + "years old" + c + " Favorite color.");


// Asynchronous programming
// console.log("Start")
// setTimeout(function(){
//     console.log("Hey I am Good");
// },3000)

// console.log("End")

// callbacks

function loadScript(src,callbacks)
{
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("laoded script with SRC : "+src)
        callback(null,src);
    }

    script.onerror = function(){
        console.log("Error loading script with src : "+src);
        callback(new Error("SRC got some error"))
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error)
    {
        console.log("Error");
    }
    alert("Hello World!",src);
}

function goodmorning(error,src)
{
    if(error)
    {
        console.log(error)
        sendemergencyMessageToCeo();
        return
    }
    alert('Good Morning '+src);
}

loadScript("https://www.youtube.com/",function goodmorning(error,src)
{
        if(error)
        {
            console.log(error)
            sendemergencyMessageToCeo();
            return
        }

        loadScript("https://www.youtube.com2/",function goodmorning(error,src)
        {
                if(error)
                {
                    console.log(error)
                    sendemergencyMessageToCeo();
                    return
                }
        
        });

        loadScript("https://www.youtube.com3/",function goodmorning(error,src)
{
        if(error)
        {
            console.log(error)
            sendemergencyMessageToCeo();
            return
        }

});

loadScript("https://www.youtube.com4/",function goodmorning(error,src)
{
        if(error)
        {
            console.log(error)
            sendemergencyMessageToCeo();
            return
        }

});
loadScript("https://www.youtube.com5/",function goodmorning(error,src)
{
        if(error)
        {
            console.log(error)
            sendemergencyMessageToCeo();
            return
        }

});
loadScript("https://www.youtube.com6/",function goodmorning(error,src)
{
        if(error)
        {
            console.log(error)
            sendemergencyMessageToCeo();
            return
        }

});
});

