// array of oblect letterlals (which is key value pairs)
const x = [{
        id : 1,
        text: 'security lect',
        isComplete: 'yes'
    },
    {
        id: 2,
        text: 'accounting lect',
        isComplete: 'no'
    },
    {
        id: 3,
        text: 'personal website',
        isComplete: 'no'
    }]

// console.log(x[2].isComplete)
// const y = JSON.stringify(x)
// console.log(y)  


function s(arry){
	for(let todo of x){
		console.log(todo.text)
	}
	for(let i = 0 ;i < x.length ;i++){
		console.log(x[i].isComplete)
	}
	if(arry.length){
	return 'you need to pumb these numbers up boy'
}
}
// console.log(s(x))
// creating class befor class was added
function Person(firstName, lastName, dob){
	this.firstName = firstName
	this.lastName = lastName;
	this.dob = new Date(dob)
}
// portotypical something something
Person.prototype.getBirthWeekDay = function(){
	return this.dob.getDay();
}
const person1 = new Person('jolly', 'Roger', '8-9-1889' );

console.log(person1)
console.log(person1.getBirthWeekDay())

class Personclass {
	constructor(firstName, lastName, dob){
		this.firstName = firstName
		this.lastName = lastName;
		this.dob = new Date(dob)
	}
	getBirthYear(){
		return this.dob.getFullYear()
	}
}
const person2 = new Personclass('jack', 'carbon', '9-9-1000')

console.log(person2.getBirthYear())

// string is two back tick `` and string format is `${var}` 
var x = 10;
n = `x = ${x}`