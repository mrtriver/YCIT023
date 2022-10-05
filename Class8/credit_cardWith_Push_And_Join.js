let card = "1223 2323 2323 1212";
let hideNum = [];
for (let i = 0; i<card.length; i++)
{
    if(i<card.length-4){
        hideNum.push("*");
    }
    else
    {
        hideNum.push(card[i]);
    }
}
console.log("Balance for the credit card"+hideNum.join(""));