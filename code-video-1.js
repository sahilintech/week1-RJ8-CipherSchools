// In JavaScript, we can declare a variable in 3 ways
// by using var
// by using let
// by using const

// const myName = [];
// myName.push("John");
// console.log(myName);

// let myName = "John"
// console.log(myName);
// myName = "Alex";
// console.log(myName);

//String Interpolation

// let firstName = "Sahil";
// let lastName = "Chauhan";
// // let fullName = firstName + " " + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// let addTwoNumbers = (num1, num2 = 5) =>{
//     return num1 + num2;
// }

// console.log(addTwoNumbers(1));

// Rest and Spread Operator are applicable in arrays and objecgs in js
let array = [5, 10, 15, 20, 25];
// Spread -> ...
console.log(...array, 78);
// Rest -> ...
