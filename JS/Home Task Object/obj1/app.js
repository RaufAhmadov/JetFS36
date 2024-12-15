"use strict"

// Task 1


// // Literal Code
// let user = {
//     name: "John",
//     surname: "Smith",
// };
// console.log(user);

// user.name = "Pete";
// console.log(user);

// delete user.name;
// console.log(user);

// // Dynamic Code

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;


// Task 2 


// function check(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// };

// let obj = {};

// // obj.name = "";

// let result = check(obj);

// console.log(result);



// Task 3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;

// for (let key in salaries){
//     sum = sum + salaries[key];
// }

// alert(sum);


// Task4

// let menu = {
//     width: 0,
//     height: 0,
//     title: "",
// };

// let number = +prompt("Width :");
// menu.width = number;
// let number2 = +prompt("Height :");
// menu.height = number2;
// let word = prompt("Word :").toLowerCase();
// menu.title = word;

// if(number >= 0 && number2 >=0 && word !== ""){
//     document.write(`Math: ${menu.width * 2 + menu.height * 2}, Title: ${menu.title}`);
// }
// else{document.write("Error");}