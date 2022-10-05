
   
        if(i % 3 == 0 && i % 5 == 0) {
            console.log(i,"\tFizzBuzz");     
        }else if ( i %3 == 0 ){
            console.log (i,"\tFizz");
        }else if (i % 5 == 0) {
            console.log (i,"\tBuzz")
        }else if (i % 5 !==0 || i % 3 !==0 ) {
            console.log(i);
        }

