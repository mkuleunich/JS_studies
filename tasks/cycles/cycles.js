/**

 * Write the function that will calculate the amonut of discout 
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

  if (redemption >= 0 && redemption <= 350) {
    discount = 0;
  } else if (redemption >= 351 && redemption <= 1350) {
    discount = 15;
  } else if (redemption >= 1351 && redemption <= 2700) {
    discount = 30;
  } else if (redemption >= 2701 && redemption <= 6500) {
    discount = 45;
  } else {
    discount = 0;
  }

  return discount;
}
/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  let i = 10; //10! = 3628800
  let x = 1;
   for (i = 1; i <= 10; i++) x = x * i;
  console.log(x);
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
let sum = '';

for (let elem of substr) {
sum += elem;
}
console.log(sum);
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
  
  let sum = 0;
  
for (let elem in personIncomes) {
sum += personIncomes[elem];
}
  console.log(sum);
}
module.exports = calculateDiscount;

