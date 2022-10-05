//Question 1b 
// 1. Print a list of numbers from 0 to 25, including 25.
// 2. If the number is divisible by 3, print the number and "Fizz".
// 3. If the number is divisible by 5, print the number and "Buzz".
// 4. If the number is divisible by both, print the number and "FizzBuzz"
// 5. If the number is divisible by neither, print just the number.
// 6. Separate the number and "FizzBuzz" somehow, for example a tab or a fixed amount of spaces.

for (let i=0; i<= 25; i++) {  //Print a list of numbers
   
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i + "\tFizzBuzz");      // Print the FizzBuzz
    }else if ( i %3 == 0 ){
        console.log (i + "\tFizz");
    }else if (i % 5 == 0) {
        console.log (i + "\tBuzz")
    }else  {
        console.log(i);
    }
    
    
    }