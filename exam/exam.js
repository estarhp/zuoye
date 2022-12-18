let front=document.querySelector(".circulation-front")
let back=document.querySelector(".circulation-back")
let left=document.querySelector(".left-arrows")
let right=document.querySelector('.right-arrows')
let circle=document.querySelectorAll(".circle a")
let btn=document.querySelectorAll(".watch-ear li")
let wear=document.querySelectorAll(".wear>div")
let side= document.querySelectorAll(".side-nav>a")
let flag=1
//更换a的src此处省略
let times=0
console.log(document.documentElement.clientWidth)
circle[0].style.background="rgba(115,115,122)"
function transform() {
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.background=""
    }

    if (flag==1) {
        back.style.background="url('img/2.jpg')"
        back.style.backgroundSize="cover"
        circle[flag].style.background="rgba(115,115,122)"
        setTimeout(()=>  {
            front.style.background="url('img/2.jpg')"
            front.style.backgroundSize="cover"
        },300)

    }
    if (flag==2) {
        back.style.background="url('img/3.jpg')"
        back.style.backgroundSize="cover"
        circle[flag].style.background="rgba(115,115,122)"
        setTimeout(()=>  {
            front.style.background="url('img/3.jpg')"
            front.style.backgroundSize="cover"
        },300)
    }
    if (flag==3) {
        back.style.background="url('img/4.jpg')"
        back.style.backgroundSize="cover"
        circle[flag].style.background="rgba(115,115,122)"
        setTimeout(()=>  {
            front.style.background="url('img/4.jpg')"
            front.style.backgroundSize="cover"
        },300)
    }
    if (flag==4) {
        back.style.background="url('img/5.jpg')"
        back.style.backgroundSize="cover"
        circle[flag].style.background="rgba(115,115,122)"
        setTimeout(()=>  {
            front.style.background="url('img/5.jpg')"
            front.style.backgroundSize="cover"
        },300)
    }
    if (flag==5) {
        back.style.background="url('img/6.jpg')"
        back.style.backgroundSize="cover"
        circle[flag].style.background="rgba(115,115,122)"
        setTimeout(()=>  {
            front.style.background="url('img/6.jpg')"
            front.style.backgroundSize="cover"
        },300)
    }
    if (flag==6||flag==0) {
        back.style.background="url('img/1.jpg')"
        back.style.backgroundSize="cover"
        circle[flag%6].style.background="rgba(115,115,122)"
        setTimeout(()=>  {
            front.style.background="url('img/1.jpg')"
            front.style.backgroundSize="cover"
        },300)
    }
    flag%=6
    flag++
}

// 定时进行变换
var timer=setInterval(transform,3000)


// 当鼠标放在图片上，停止计时器
front.addEventListener("mouseover",()=> {
    clearInterval(timer)

})

front.addEventListener("mouseout",()=> {
    timer=setInterval(transform,3000)
})

left.addEventListener("mouseover",()=> {
    clearInterval(timer)

})

left.addEventListener("mouseout",()=> {
    timer=setInterval(transform,3000)
})
right.addEventListener("mouseover",()=> {
    clearInterval(timer)

})

right.addEventListener("mouseout",()=> {
    timer=setInterval(transform,3000)
})

left.addEventListener("click",()=> {

    transform()
})
right.addEventListener("click",()=> {

    transform()
})


for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click",(e) => {
        clearInterval(timer)


        flag=i;
        transform()
        // timer=setInterval(transform,3000)
    })
    circle[i].addEventListener("mouseover",() => {
        clearInterval(timer)
    })
    circle[i].addEventListener("mouseout",() => {
        timer=setInterval(transform,3000)
    })
}



// border-bottom: rgba(255,103,0) solid 2px;
// color: rgba(255,103,0);

let on_of = 0
console.log(btn)
for (let j = 0; j < btn.length; j++) {
    if (j%2==0) {
        btn[j].style.color="rgba(255,103,0)"
        btn[j].style.borderBottom="rgba(255,103,0) solid 2px"
    }

    btn[j].addEventListener("mouseover",()=> {
        if (j%2==0) {
            for (let i = 0; i < 2; i++) {
                btn[j+i].style.color=""
                btn[j+i].style.borderBottom=""
                wear[j+i].style.display="none"
            }
        }
        if (j%2!=0) {
            for (let i = 0; i < 2; i++) {
                btn[j-i].style.color=""
                btn[j-i].style.borderBottom=""
                wear[j-i].style.display="none"
            }
        }

        btn[j].style.color="rgba(255,103,0)"
        btn[j].style.borderBottom="rgba(255,103,0) solid 2px"
        wear[j].style.display="flex"
        on_of=1
    })



}
for (let i = 0; i < side.length; i++) {
    side[i].addEventListener("mouseover",()=> {
        side[i].style.color="rgba(255,103,0)"
    })
    side[i].addEventListener("mouseout",()=> {
        side[i].style.color="rgba(153,153,153)"
    })

}
let text =new Array(side.length)
sides()
function sides() {
    let docEl = document.documentElement;
    if (docEl.clientWidth<1500&&times==0) {
        for (let i = 0; i < side.length; i++) {
            text[i]=(side[i].children[0].innerHTML)
            side[i].removeChild(side[i].children[0])
            times=1
        }
    }
    if (docEl.clientWidth>=1500&&times==1) {
        for (let i = 0; i < side.length; i++) {

            side[i].appendChild(document.createElement("p"))
            side[i].children[0].innerHTML=text[i]
            times=0

        }

    }

}


window.onresize=function(){
    sides()
}

side[side.length-1].addEventListener("click",()=>{
    document.documentElement.scrollTop=0
})

window.onscroll= ()=> {
        let distance=document.documentElement.scrollTop
        if (distance>=1000) {
          side[side.length-1].style.display="block"
        }
        if (distance<=1000) {
        side[side.length-1].style.display="none"
        }


}





