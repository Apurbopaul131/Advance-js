function stopWatch(){
    let i = 0;
    return function(){
        i++;
        return i;
    }
}
let clock1 = stopWatch();
let time1 = clock1();
let time2 = clock1();
console.log(time1,time2);
let clock2 = stopWatch();
let t = clock2();
// let t2 = clock2();
let t3 = clock1();
console.log(t,t3);