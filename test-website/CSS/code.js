// get's the snippet from the html code you want to fill in
const element = document.querySelectorAll('.snippet');
// let r = document.styleSheets[0].cssRules
// console.log(r)
// const style = getComputedStyle(element)
// function css_text(x) { return x.cssText; }
// Array.prototype.map.call(child.cssStylesheet.cssRules, css_text).join('\n')
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

const foo2 = (element) => {
    // this takes the content visual section and prints it in the code section
    for(doc of element){
        console.log(doc)
        let snippet_info = doc.querySelector('.info')
        let code = doc.querySelector('.code')

        // content of the example pages in the example folder
        let example_page = doc.querySelector("iframe")
        let example = example_page.contentWindow.document
        let vis = example.querySelector(".show")
        let info = example.querySelectorAll(".info")
        let example_css = example.querySelector("style")

        snippet_info.innerText = info.innerText;
        
        let snippet_css = example_css.innerText
        let inHtml = vis.innerHTML
        code.innerHTML=`HTML<pre><code>${plainText(inHtml)}</code></pre><hr>CSS<br> <code>${snippet_css}</code>`
        // console.log(arr)
    }
}

foo2(element)