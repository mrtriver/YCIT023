let myString = "37723723772";

let mySlice = myString.slice(0,7);
console.log(mySlice);

let newString = myString.replace(mySlice, "*******");

console.log(newString);
