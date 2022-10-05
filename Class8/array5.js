const a = ["A", "B", "C"]; //length =3 at the beginning

delete a[1];
console.log(a);  // B is deleted , but its place remains like "empty item"

console.log(a.length); //TRICKY length is the same
console.log(0 in a);
console.log(1 in a);
console.log(2 in a);
console.log(3 in a);
console.log(4 in a);