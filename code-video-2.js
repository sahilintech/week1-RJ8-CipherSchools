// //.map()

// let arr = [1, 2, 3, 4, 5]
// let newArr = [];
// let j = 0;
// for(i in arr)
// {
//     newArr[j] = i*i;
//     j++;
// }
// console.log(newArr);

// let newArr = arr.map((element)=>element*element)

// console.log(newArr);

// forEach
/*
let arr = [1,2,3]
arr.forEach(element => {
    element *= element;
    console.log(element);
});
*/

// .filter()

// let arr = [10, 20, 30, 40, 50]
// let newArr = arr.filter((element)=>element>=30);
// console.log(newArr);

// .find()

// let arr = [10, 20, 30, 40, 50];
// let temp = arr.find((value)=>{
//     return value> 20;
// })
// console.log(temp);

// .sort()

// let arr = [40, 50, 10, 20, 5]

// let newArr = arr.sort((prev, next)=>prev-next);

// console.log(newArr)

// Object destructuring

// let details = {
//     name: "Alex",
//     age: 24,
//     address: {
//         street: "Brooklyn",
//         city: "New York",
//         state: "Ny",
//         country: "USA",
//         passportDetails: {
//             passportNo: "af923"
//         },
//     },
// }

// let myName = details.name;
// console.log(myName)

// let {name: myName, age} = details
// console.log(myName, age)

// Array matching
// if(arr1 == arr2)

// object matching

// let obj1 = {name: "sahil"};
// let obj2 = {name: "sahil"};

// console.log(obj1 === obj2)

// map and set

let map = new Map();

map.set("name", "sahil");
console.log(map);
map.entries();
