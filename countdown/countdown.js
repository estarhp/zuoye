let ul=document.querySelector('ul')

let time=function () {

        let nowtime = new Date(),  //获取当前时间
            endtime = new Date("2023/1/1");  //定义结束时间
        let lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
            leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
            lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
            leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
            lefts = Math.floor(lefttime/1000%60);  //计算秒数
    ul.children[1].innerHTML=leftd+"天"
    ul.children[2].innerHTML=lefth+"时"
    ul.children[3].innerHTML=leftm+"分"
    ul.children[4].innerHTML=lefts+"秒"

}
time()
time=setInterval(time,1000)
