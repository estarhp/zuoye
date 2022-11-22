let btn=document.querySelector('button')
let input=document.querySelector('input')
let ul=document.querySelector('ul')
btn.addEventListener('click',function () {
    let text=input.value
    if (input.value==''){alert('您未输入内容！！！')}
    else {let li=document.createElement('li')
        ul.appendChild(li)
        let del=document.createElement('span')
        li.innerText=text
        li.appendChild(del)
        del.innerText="delete"
        input.value=""
        var span=document.querySelectorAll('span')
        for (let i = 0; i < span.length; i++) {
            span[i].style.cursor='pointer'
            span[i].addEventListener('click',function () {
                this.parentElement.remove() })}}






})













