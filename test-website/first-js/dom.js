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
// addEventListener() built in fucntion to take events first arguement is type  of event second argument is a funcion that gets passed the event instance
// the function is a function to change the background color to random one using built in module Math
btn[0].addEventListener('click', (e) => {
    e.preventDefault();
    var bg = ('#' + ('000000' +Math.floor(Math.random() * (256*256*256)).toString(16)).substr(-6))
    const bd = document.querySelector('body')
    bd.style.backgroundColor = bg;
    bd.classList.add('aclassiwannaAddtothisElement')
    
})

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    if(nameInput === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'enter fields bitch'
    //  error message disapears after 3 seconds built in function setTimeout(takes functon and the time untill execution)
        setTimeout(() => msg.remove() , 3000)
    }
    else {
        console.log("bitch was successful")
        const li = document.createElement('li')
        // li.appendChild(document.createTextNode('${}'))
        li.innerHTML = `${nameInput.value} :  ${emailInput.value}`
        userList.appendChild(li)
    }
}