// console.log('Hello again!!!');

// let array = [4, 3, 2, 6, 6];

// function getMin (varArray){
//   let min = varArray[0];
  
//   for (let a = 1; a < varArray.length; a++) {
//     if (varArray[a] < min) {
//       min = varArray[a];
//     }
//   } return min;
// }
// console.log(varArray[a]); //выведет 2
 

let array = [4, 3, 2, 6, 6];
let reducer = (acc, cur) => acc < cur ? acc : cur;
console.log(array.reduce(reducer));