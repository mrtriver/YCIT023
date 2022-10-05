a = [];
a [0] = "Murat";
a [1] = "Irmak";
console.log(a);
a.unshift("Mr.");                   //unshift
console.log(a);
a.push("Hello");                    //push
console.log(a);
a.shift();                          // shift
console.log(a);
a.pop();                            // pop
console.log(a);
delete a[0]                         // delete
console.log(a);
a.push("River");
console.log(1 in a);                // (1 in a)
console.log(a.includes("Murat"));
console.log(a.includes("Irmak"));
console.log(a.includes("river"));   //includes

// a = null;
// console.log(a);