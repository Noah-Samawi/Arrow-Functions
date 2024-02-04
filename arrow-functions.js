/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwoNumbers(a, b) {
    // Code block
   // return a + b;
//}
//let sum = addTwoNumbers(2, 6);
//console.log(sum);
// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(2, 6);
console.log(sum);
// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers(4, 6);
console.log(sum2);
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello World!');

// Returning Multiple Lines
const returnMultipleLines = () => (
    
   "This is multiline string"

)
    console.log(returnMultipleLines());

