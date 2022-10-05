const date1 = new Date(); //Correct way to create a date
const date2 = new Date(2022,09,16);
console.log(date2.getMonth());


const date_bad  = Date();  // String type (actual reagional base,current date)
console.log(date1)
console.log(date_bad)
console.log(date2);

//SERIALIZE : Thank things and make it like human can see. we can transfer it over the map.

console.log(Date(1663501882845));

// "2015-03:25" ISO Date format (International)
//FORMATS THAT WILL NOT WORK
   "YYYY/MM/DD"
   "DD-MM-YYY"

   console.log(Date.now());
   
   let msec = Date.parse("january 1, 1970")
   console.log(msec);

   console.log();