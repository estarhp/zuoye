setTimeout(() => { //settimeout 的优先级比promise低，添加到任务队列
    console.log('setTimeout start');
    new Promise((resolve) => {
        console.log('promise1 start');
        resolve();
    }).then(() => {
        console.log('promise1 end');
    })
    console.log('setTimeout end');
}, 0);
function promise2() {
    return new Promise((resolve) => {
        console.log('promise2');
        resolve();
    })
}
async function async1() {
    console.log('async1 start');
    await promise2();
    console.log('async1 end');
}
async1();//先执行async1 优先级较高，等价于promise，直接执行async1 start
         //await等待执行promise2，直接输出promise2，将后面的语句丢入任务队列后，直接执行下一句同步
        //输出script end，进入任务队列，async权重高先执行，输出async1 end
        //先入先出，则执行settimeout，输出etTimeout start，promise直接执行输出promise1 start
        //将promise1丢进任务队列，输出下一句setTimeout end，最后输出最后进入任务队列的promise1 end
console.log('script end');
