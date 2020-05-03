console.log(fetch('https://reqres.in/api/users'))
//-->output
/* 
Promise {<pending>}
    __proto__: Promise
    [[PromiseStatus]]: "resolved"
    [[PromiseValue]]: Response */

fetch('https://reqres.in/api/users')
.then(response => console.log(response)) 
//--> output
/* 
Response {type: "cors", url: "https://reqres.in/api/users", redirected: false, status: 200, ok: true, …}
    body: (...)
    bodyUsed: false
    headers: Headers {}
    ok: true
    redirected: false
    status: 200
    statusText: ""
    type: "cors"
    url: "https://reqres.in/api/users"
    __proto__: Response */
fetch('https://reqres.in/api/users')
.then(response => console.log(response.json()))
//--> output
/* 
Promise {<pending>}
    __proto__: Promise
    [[PromiseStatus]]: "resolved"
    [[PromiseValue]]: Object */

fetch('https://reqres.in/api/users')
.then(response => response.json()).then( data => console.log(data))
// --> output
/* 
{page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}
    ad: {company: "StatusCode Weekly", url: "http://statuscode.org/", text: "A weekly newsletter focusing on software developme…server, performance, and the stack end of things."}
    data: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
    page: 1
    per_page: 6
    total: 12
    total_pages: 2
    __proto__: Object */


// fetch doesn't fail even if API fails 404, unless for network reasons
// for that reason make sure response is ok
fetch('https://reqres.in/api/users')
.then(response => {
    if(response.ok){
        console.log('SUCCESS')
    } else {
        console.log('FAILED')
    }
    return response.json()}).then( data => console.log(data))
// --output
/* 
SUCCESS
fetchapp.js:34 {page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …} */


// you can use http methods with fetch GET,POST,PUT and send json
let user = {
    name: 'user1',
    size: 6
}
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)})
.then(response => {
    if(response.ok){
        console.log('SUCCESS')
    } else {
        console.log('FAILED')
    }
    return response.json()}).then( data => console.log(data))

// objects vs json
console.log(user)
console.log(JSON.stringify(user))