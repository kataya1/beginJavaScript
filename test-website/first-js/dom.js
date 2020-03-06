// to manipudlte the dom tutorial
/*const l = document.querySelectorAll('div')
console.log(l)
l.forEach(function item(it){console.log(it)})*/
// document.querySelector('input.btn').remove()
// changing the textContent of the first list element
/*document.querySelector(".item").textContent = "hellofriend" */
// changing the textContent of all text element and getting the index from forEach function
/* document.querySelectorAll(".item").forEach((item, i) => item.textContent = "hello " + i )
 */

//  changint the text or inner html use innerHTML for dynamic tag adding
// const ul = document.querySelector('.items')
// ul.firstElementChild.textContent = '<h1> Hello </h1>'
// ul.children[1].innerText = '<h1> brad </h1>'
// ul.lastElementChild.innerHTML = '<h1> hi </h1>'

// events
const btn = document.querySelectorAll('.btn')
btn[0].addEventListener('click', (e) => {
    e.preventDefault();
    var bg = ('#' + ('000000' +Math.floor(Math.random() * (256*256*256)).toString(16)).substr(-6))
    var bd = document.querySelector('body')
    bd.style.backgroundColor = bg;
    bd.classList.add('aclassiwannaAddtothisElement')
    
} )