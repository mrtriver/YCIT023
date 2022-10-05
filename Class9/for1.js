
// for loop ******************************
const array1 = [30,60,70,80]
let sum = 0;
for(let c =0; c < array1.length; c++)
{
    console.log(array1[c])
    sum += array1[c]
}
console.log(sum);

// for-in (works with indexes) *************

for (let i in array1) 
{ // iholds the current index
sum += array1[i];
}
console.log(sum);

// for of (works with the value itself)******
for (let w of array1)
{
    sum += w;
}
console.log(sum);
