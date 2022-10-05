let emplojeeType = "A";
let bonus = 0.0;

//when writing without "break" code goes down and sums it up

switch(emplojeeType)
{
case "A":
    bonus += 100;

case "B":
    bonus += 200; 
    break;   
case "C":
    bonus += 50;
}
console.log (bonus);