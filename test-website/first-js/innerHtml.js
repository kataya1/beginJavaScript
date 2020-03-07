//  changint the text or inner html use innerHTML for dynamic tag adding
const ul = document.querySelector('.items')
ul.firstElementChild.textContent = '<h1> Hello </h1>'
ul.children[1].innerText = '<h1> brad </h1>'
ul.lastElementChild.innerHTML = '<h1> hi </h1>'

