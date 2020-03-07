// to manipudlte the dom tutorial
const l = document.querySelectorAll('div')
console.log(l)
l.forEach(function item(it){console.log(it)})
document.querySelector('input.btn').remove()
// changing the textContent of the first list element
// document.querySelector(".item").textContent = "hellofriend" 
// changing the textContent of all text element and getting the index from forEach function
document.querySelectorAll(".item").forEach((item, i) => item.textContent = "hello " + i )

// check more stuff in innerHtml.js