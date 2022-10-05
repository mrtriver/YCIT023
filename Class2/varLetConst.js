//LET
let a = 1;
a =2; 
console.log(a);
//VAR 
var murat;
let irmak;
// const river; CONST MUST BE INITIALISED 
//SKOPE
let x = 22;
{
    let x = 43;
    console.log(x);
}
console.log(x);
let age = 20;
age = age + 1; // Happy birthday.
age = 30; // 21 was a mistake, let's set it to 30.
console.log("age",age);

let g = 2;
{
    g = 5;
    console.log(g);
}
console.log(g);