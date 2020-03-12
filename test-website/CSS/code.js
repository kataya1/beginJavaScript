const element = document.querySelectorAll('.snippet');
// let r = document.styleSheets[0].cssRules
// console.log(r)
// const style = getComputedStyle(element)
// function css_text(x) { return x.cssText; }
// implenment it using foreach or map later
function plainText(x) {
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
const foo = (element) => {
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
