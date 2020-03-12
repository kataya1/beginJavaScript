const element = document.querySelectorAll('.snippet')

// const style = getComputedStyle(element)

const foo = (element) => {
    for(v of element){
        console.log(v)
    }
}

foo(element)