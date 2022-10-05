//YCIT023  Homework1/ 1a Calculation Tip Amounts For A Dining Party
//By Murat Irmak- X050501, McGill ID: 261067810
const FEDERAL_TAX = .050;
const QUEBEC_TAX = .09975;
const TIP_AMAZING = 0.20;
const TIP_GOOD = 0.15;
const TIP_ACCEPTABLE = 0.10;
const TIP_BAD = 0.0;
let tip = TIP_AMAZING;                // Here the tip persentage is chosen 

let totalWithTax = 0.0;
let totalWithTip = 0.0;

let numberOfDiners = 5;                 // whether or not number of diners specified negative
numberOfDiners = Math.abs(parseInt(numberOfDiners));  //The validation of positive whole number

let priceOfMealPerPerson = 10.23;          //Should be positive decimal number
priceOfMealPerPerson = Math.abs(priceOfMealPerPerson); //The validation of price as positive decimal

let totalPriceBeforeTax = 0.0;
let grandTotalWithTaxAndTip = 0.0;
let totalAmountToPayPerPerson = 0.0


console.log("***********Calculation Tip Amounts For A Dining Party **********")
// Outputs : 1)The total price before tax
totalPriceBeforeTax = priceOfMealPerPerson * numberOfDiners;
console.log("The total price before tax =", totalPriceBeforeTax.toFixed(2));

// 2)The tip percentage determined
console.log("The tip percentage determined =", tip *100 +" %");

// 3)The amount of provential tax
console.log("The amount of provential tax =", (totalPriceBeforeTax * QUEBEC_TAX).toFixed(3));

// 4)The amount of federal tax 
console.log("The amount of federal tax =", (totalPriceBeforeTax * FEDERAL_TAX).toFixed(2));

// 5)The total with tax 
totalWithTax = totalPriceBeforeTax + (totalPriceBeforeTax * QUEBEC_TAX)+(totalPriceBeforeTax * FEDERAL_TAX);
console.log("The total with tax =",totalWithTax.toFixed(2));

// 6)The total tip 
let totalTip = tip * totalPriceBeforeTax;
console.log("The total tip =", totalTip.toFixed(2) );

// 7)The total amount to pay per person
 grandTotalWithTaxAndTip = (totalWithTax + totalTip);
totalAmountToPayPerPerson = (grandTotalWithTaxAndTip / numberOfDiners).toFixed(2);
console.log("The total amount to pay per person =", totalAmountToPayPerPerson);




// For dividing a non-even cent
console.log();
console.log("*********Calculation for non-even cent amount per person ***********");
//Formulated as :  divisionForNon_EvenCent = (totalWithTax /numberOfDiners )* toFixed(2)          
// if :  divisionForNon_EvenCent * numberOfDiners != totalWithTax 
// --->  onePersonWillPay = totalWithTax - ((n-1)*divisionForNon_EvenCent).toFixed(2)
//                         The other people will pay  --->  divisionForNon_EvenCent   

let divisionForNon_Even_Cent = 0.0;
let onePersonWillPay = 0.0;
let otherEachPersonWillPay = 0.0;

console.log("Total with tax ", totalWithTax.toFixed(2));
let decimalPart = (totalWithTax - Math.floor(totalWithTax)).toFixed(2);


console.log("decimal part =", decimalPart);
divisionForNon_Even_Cent = (grandTotalWithTaxAndTip / numberOfDiners).toFixed(2);

 //The following code works for non-even cent calculations
if((decimalPart*100 )% 2 != 0 && divisionForNon_Even_Cent *numberOfDiners != totalWithTax ) {     
   
   
        onePersonWillPay = (grandTotalWithTaxAndTip - ((numberOfDiners-1)* divisionForNon_Even_Cent)).toFixed(2);
        otherEachPersonWillPay = divisionForNon_Even_Cent;
        console.log("One person will pay for non-even cent amount =", onePersonWillPay);
        console.log("Remaining each person will pay =", otherEachPersonWillPay);

   } else {
    console.log("This is an even cent calculation and, ");
    console.log("The total amount to pay per person =",totalAmountToPayPerPerson);
   }
   




