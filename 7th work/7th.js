!function(){

    if (document.cookie.indexOf("token")===-1){

        if (window.localStorage["token"]){
            document.cookie+="token"+"="+window.localStorage["token"]


        }else{
            alert("宁还未登录？快快注册吧")
        }

    }
    else {
        alert("宁已经登录")
    }



    let comment=document.querySelector(".ban")
    let colors=[
        "#55efc4",
        "#81ecec",
        "#74b9ff",
        "#a29bfe",
        "#dfe6e9",
        "#00b894",
        "#0984e3",
        "#6c5ce7",
        "#b2bec3",
        "#ffeaa7",
        "#fab1a0",
        "#ff7675",
        "#fd79a8",
        "#636e72",
        "#fdcb6e",
        "#e17055",
        "#d63031",
        "#e84393",
    ]
    fetch("http://runninglili.club:8080/getAllMessages")
        .then(res=>res.json())//这一步是为了获取响应体
        .then(res=>{
            for (const resKey in res) {
                // console.log(res[resKey])
                let img=res[resKey]["avatar"]
                let list=document.createElement("div")
                let random=parseInt(Math.random()*colors.length)
                list.style.backgroundColor=colors[random]
                console.log(random)
                list.innerHTML="<img>"+res[resKey]["username"]+":"+res[resKey]["words"]
                list.firstChild.src=img
                comment.appendChild(list)
            }
        })
}()

let login=document.querySelector(".login")
let sign=document.querySelector(".sign")
let send=document.querySelector(".submit")


login.addEventListener("click",()=>{
    let username=login.previousElementSibling.value

    login.previousElementSibling.value=""
    if (document.cookie.indexOf("token")===-1){
        // alert("宁还未登录？快快注册吧")
    }else {
        alert("宁已经登录")
        return 0
    }

    fetch("http://runninglili.club:8080/login",{

        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:"username="+username

    }).then(res=>res.json()).then(res=>{
        window.localStorage.setItem("token",res["token"])
        document.cookie+="token"+"="+res.token
        alert(res["mes"])
    })





})

sign.addEventListener("click",()=>{
    let username=sign.previousElementSibling.value
    sign.previousElementSibling.value=""





   fetch("http://runninglili.club:8080/register",{
       method:"POST",
       headers:{
           "Content-Type":"application/x-www-form-urlencoded"
       },
       body:"username="+username



   }).then(res=> res.json()
   ).then(res=>{
       alert(res["mes"])
   })



})

let token = window.localStorage["token"]



send.addEventListener("click",()=>{

    let words

    if (send.previousElementSibling.value){
        words = send.previousElementSibling.value
    }else {
        alert("宁未输入内容")
    }


    send.previousElementSibling.value=""

    fetch("http://runninglili.club:8080/sendMes",{
        method:"POST",
        body:`words=${words}`,
        headers:{
            Authorization:token,
            "Content-Type":"application/x-www-form-urlencoded"
        },

    }).then(res=> res.json())
        .then(res => {
            if(res["code"]==200) {

               location.reload()

            }
        })



})












