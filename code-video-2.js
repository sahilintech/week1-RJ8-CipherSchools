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

let arr = [10, 20, 30, 40, 50]
let newArr = arr.filter((element)=>element>=30);
console.log(newArr);