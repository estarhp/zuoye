let yuan=document.querySelectorAll('div')


//1 setTImeout 嵌套

        // setTimeout(()=> {
        //     yuan[0].classList.add('dong')
        //     setTimeout(()=> {
        //         yuan[1].classList.add('dong')
        //         setTimeout(()=> {
        //             yuan[2].classList.add('dong')
        //
        //         },5000)
        //     },5000)
        // },0)


function dong(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            yuan[0].classList.add('dong')
            resolve()
        },0)
    })
}
function dong1(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            yuan[1].classList.add('dong')
            resolve()
        },5000)
    })
}
function dong2(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            yuan[2].classList.add('dong')
            resolve()
        },5000)
    })
}
//2promise链式调用
// dong().then(dong1).then(dong2)


//3 async await
async function demo() {
    await dong()
    await dong1()
    await dong2()
}
demo()







