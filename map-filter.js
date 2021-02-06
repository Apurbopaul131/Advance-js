let numbers =[10,20,30,40,50];
// let array = [];
// for(let i = 0;i<numbers.length;i++){
//     const element = numbers[i];
//     const result = element * element;
//     array.push(result);
// }

const result = numbers.map(function(element,index){
    console.log(element,index);
});


// const bigger = numbers.filter(x=>{
//     if(x>50){
//         return x;
//     }
// })
// console.log(bigger);
// const isThere = numbers.find(x => x>40);
// console.log(isThere);

