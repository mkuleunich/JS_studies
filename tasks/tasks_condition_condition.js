//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
// {
//   const a = 3,
//         b = 2;

//   if (a + b < 4) {
//     console.log('wrong');
//   } else {
//     console.log('too much');
//   }
// }


const a = 3,
      b = 2;

(a + b < 4) ? console.log('wrong') : console.log('too much');


/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */

 //Task 1

    const x = 3;
    const y = 7;

    if (x < 10 && y < 10) {
        console.log(x + y);
    } else {
        console.log(x * y);
    }

//Task 2

(x <10 && y < 10) ? console.log(x + y) : console.log(x * y);

/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */


    const x = 3;
    const y = 7;
    let operator = "add";

    switch (operator) {
          case operator = "add":
            console.log(x + y);
            break;
          case operator = "subtract":
            console.log(x - y);
            break;
          case operator = "multiply":
            console.log(x * y);
            break;
          default:
            console.log(x / y); 
            break;
        }  


        //OR
        if (operator = "add") {
            console.log(x + y);
          } else if (operator = "subtract") {
              console.log(x - y);
            } else if (operator = "multiply") {
                console.log(x * y);
          } else {
              console.log(x / y);
          }