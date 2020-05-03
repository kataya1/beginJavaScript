
// form parrsing
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
document.querySelector('ul.items').remove()
function onSubmit(e) {
    e.preventDefault()
    if(nameInput === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = "enter field bitch"
        // traversy's approach
    //  error message disapears after 3 seconds built in function setTimeout(takes functon and the time untill execution)
        setTimeout(() => msg.remove() , 3000)
    }
    else {
        const li = document.createElement('li')
        // li.appendChild(document.createTextNode('${}'))
        // wtf is this the string is two tilda 
        li.innerHTML = `${nameInput.value} :  ${emailInput.value}`
        userList.appendChild(li)
        console.log("bitch was successful")
    }
}

