//false value
// 0
// null
// undefined
// NaN
// ""(empty string)
// false
// truth value
// " "
// "0"
// [],{}
let num = 10;
if(num || num == 0 ){
    console.log("The value is truth.");
}
else{
    console.log("The value is false");
}