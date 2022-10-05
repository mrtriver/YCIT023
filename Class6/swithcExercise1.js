
//Code a switch statement which takes in a month number and
//returns to you the number of days which are within that 
//month. Months with 31 days are JAN, MAR, MAY, JUL, AUG, OCT, DEC.
// Feb is 28 days, BUT, every leap year (when the year is divisible by 4), FEB becomes
// 29 days. See if you can integrate this in the switch statement. 



let year = 2012;
let monthNumber = 2;
let monthWithDay = "";


switch(monthNumber)
{
    case 1:
    console.log("January 31 days")
    break;

    case 2:
        if (year % 4 == 0){
            console.log("February 29 days")
        }else {
            console.log("February 28 days")
        }
 
    break;

    case 3:
    console.log("March 31 days")
    break;

    case 4:
    console.log("April 30 days")
    break;

    case 5:
    console.log("May 31 days")
    break;

    case 6:
    console.log("June 30 days")
    break;

    case 7:
    console.log("July 31 days")
    break;

    case 8:
    console.log("August 31 days")
    break;

    case 9:
    console.log("September 30 days")
    break;

    case 10:
    console.log("October 31 days")
    break;

    case 11:
    console.log("November 30 days")
    break;

    case 12:
    console.log("December 31 days")
    
    default:
        console.log("Please enter a valid number of month");



}