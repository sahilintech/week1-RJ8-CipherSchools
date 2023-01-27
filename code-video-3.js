// class ListNode{
//     val;
//     next;

//     constructor(val, next = null)
//     {
//         this.val = val;
//         this.next = next;
//     }
// }

// class TestClass{
//     head;

//     constructor(head = null)
//     {
//         this.head = head;
//     }

//     hasLast(){
//         return this.head !== null;
//     }

//     getLast() {
//         if(!this.hasLast()){
//             return null;
//         }
//         let current = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }
//         let finalValue = current.val;
//         current = this.head;
//         while(current.next != null && current.next.next !== null){
//             current = current.next;
//         }
//         if(current.next === null)
//             this.head = null;
//         current.next = null;
//         return finalValue;
//     }
// }

// let myVar = new TestClass(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));

// console.log((myVar.getLast()));
// console.log((myVar.getLast()));
// console.log((myVar.getLast()));
// console.log((myVar.getLast()));
// console.log((myVar.getLast()));

// Promise is a class in Js
// let num1 = 10;
// let num2 = 15;
// let promise = new Promise((fulfilled, notFulfilled) => {
//     let sum = num1+num2;
//     if(sum > 24){
//         fulfilled();
//     }
//     else
//     {
//         notFulfilled();
//     }
// });

function addTwoNumbers(num1, num2){
    return new Promise((fulfilled, notFulfilled) => {
        setTimeout(() => {
            console.log("Inside setTimeout");
            fulfilled(num1 + num2);
        }, 5000);
    });
}

addTwoNumbers(10, 5)
.then(()=>{
    console.log("Promise was fulfilled");
})
.catch(()=>{
    console.log("Promise was not fulfilled");
})

