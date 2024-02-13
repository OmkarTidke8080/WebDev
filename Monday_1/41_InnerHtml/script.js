let x = document.getElementsByTagName('span')[0]
console.log(x)

let y = document.getElementsByTagName('span')[0]
console.dir(y)


console.log(document.body.firstChild.nodeName)

console.log(document.body.firstElementChild.nodeName)


// inner and outer html

// first.innerHTML
// 'Hey I am Span'
// first.outerHTML
// '<span id="first">Hey I am Span</span>'

// document.body.firstChild.data
// console.log(document.body.textContent)

// first.hidden = false