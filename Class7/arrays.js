let sum = 0;
let avrg = 0;
let highestNumber;
let numbers;

let lowestNumber;

console.log("1-)Populating a random array with selected min and max values")
console.log(randomArray(1,100));

function randomArray(min, max) {
    const array = [];
    for (let i=0; i<100; i++) 
    {      
   array[i] = Math.floor(Math.random()*(max - min)+1)+min; 
   sum = sum + array[i];
   avrg = sum / max;     //Avarage calculated here in the function
   

   

    }
    return array;
}


console.log("2-) The avarage of the whole group =\t"+avrg);








