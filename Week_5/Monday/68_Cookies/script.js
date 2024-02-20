console.log(document.cookie)
document.cokie = "name=omkar8080"
document.cokie = "name2=omkar2002"
document.cokie = "name=omkar"

let key = prompt("Enter your key")
let value = prompt("Enter your value")

document.cokie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cokie)

