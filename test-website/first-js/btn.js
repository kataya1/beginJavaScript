// events

document.querySelector('section').remove()
const h = document.querySelector('header')

h.innerHTML = `${h.innerHTML}` + '<input class="btn" type="button" value="change">'
h.children[1].classList.add('theme')
const btn = document.querySelector('input.btn')
// addEventListener() built in fucntion to take events first arguement is type  of event second argument is a funcion that gets passed the event instance
// the function is a function to change the background color to random one using built in module Math
btn.addEventListener('click', (e) => {
    e.preventDefault();
    var bg = ('#' + ('000000' +Math.floor(Math.random() * (256*256*256)).toString(16)).substr(-6))
    const bd = document.querySelector('body')
    bd.style.backgroundColor = bg;
    bd.classList.add('aclassiwannaAddtothisElement')
    
})
