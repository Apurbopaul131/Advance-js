let newArr = [];
let students = [
    {id:41,name:"Dipur"},
    {id:42,name:"Ali"},
    {id:43,name:"Apurbo"}
];
// for(let i=0;i < students.length; i++){
//     const element = students[i].name;
//     newArr.push(element);
// }
// console.log(newArr);
// const result = students.map(function(element){
//    return element.name;
// })
// console.log(result);
// const result = students.filter(element => element.id > 41);

// console.log(result);
const result = students.find(element => element.id > 41);

console.log(result);