//Q1 *****************
let x = 22;
{
     x = 43;
     console.log(x);
}
console.log(x);

//Q2*****************
let y = 22;
{
    let y = 43;
     console.log(y);
}
console.log(y);

//Q3*******************

for (let x= 5; x<=10; x++);   //throws an error here bc. after
// the ";" ends the "for" command. it will loop 5 times in  the 
//first line but nothing is gonna be printed
{
    console.log(x);
}

//Q4 ****************
const a = ["A", "B", "C"]; //length =3 at the beginning

delete a[1];
console.log(a);  // B is deleted , but its place remains like "empty item"

console.log(a.length); // length is the same 3
