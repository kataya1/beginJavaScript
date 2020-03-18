// get's the snippet from the html code you want to fill in
const element = document.querySelectorAll('.snippet');
// let r = document.styleSheets[0].cssRules
// console.log(r)
// const style = getComputedStyle(element)
// function css_text(x) { return x.cssText; }
// implenment it using foreach or map later
function plainText(x) {
    // changes html tags to non interpretable text by the html interpreter
    arr = []
    for(let char of x){
        c = char
        if(char === "<"){
           c = "&lt;"
        }
        else if (char === '>'){
            c = "&gt;"
        }
        arr.push(c)
    }
    return arr.join('')
}
// v1 retired
const foo = (element) => {
    // this takes the content visual section and prints it in the code section
    for(v of element){
        console.log(v)
        let visual = v.querySelector('.visual')
        let code = v.querySelector('.code')
        let inHtml = visual.innerHTML
        console.log(inHtml)
        // console.log(plainText(inHtml))
        // let arr = []
        // for(child of visual.children){
        //     console.log(child)
        //     // var content = Array.prototype.map.call(child.cssStylesheet.cssRules, css_text).join('\n');

        // }
        console.log(`HTML<pre><code>${plainText(inHtml)}</code></pre><hr>CSS<br> <code>${code.innerHTML}</code>`)
        code.innerHTML=`HTML<pre><code>${plainText(inHtml)}</code></pre><hr>CSS<br> <code>${code.innerHTML}</code>`
        // console.log(arr)
    }
}

foo(element)
const foo2 = (element) => {
    // this takes the content visual section and prints it in the code section
    for(v of element){
        console.log(v)
        let visual = v.querySelector('.visual')
        let code = v.querySelector('.code')
        let ifrm = visual.querySelector("iframe")
        
        let inHtml = visual.innerHTML


        console.log(`HTML<pre><code>${plainText(inHtml)}</code></pre><hr>CSS<br> <code>${code.innerHTML}</code>`)
        code.innerHTML=`HTML<pre><code>${plainText(inHtml)}</code></pre><hr>CSS<br> <code>${code.innerHTML}</code>`
        // console.log(arr)
    }
}