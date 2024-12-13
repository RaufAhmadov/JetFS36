"use strict"


// Task-01
// Konsola doğum tarixini çıxarın.Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, gender, birthday).Konsola doğum tarixini çıxarın.

// const user = {};

// let userName = prompt("Enter your name:").toLowerCase();
// userName = userName.charAt(0).toUpperCase() + userName.slice(1);

// let age = +prompt("Enter your age:");
// let gender = prompt("Enter your gender:");

// user.name = userName;
// user.age = age;
// user.gender = gender;

// document.write(`Name: ${user.name}, Age: ${user.age}, Gender: ${user.gender}`);



// Task-02
// Obyektə yaş (age) əlavə edin və doğum tarixini silin.İstifadəçi məlumatları olan bir obyekt verilib.

// const user = {
//     age: 25
// };

// console.log("User-in yaşı",user);

// delete user.age;

// console.log(user, "dəyişən delete edilib");

// document.write(`User-in yaşı : ${JSON.stringify(user)}<br>`);


// Task-03 
// Obyekt verilib ona növbəti metodları əlavə edin  setAge — istifadəçi yaşını dəyişdirən metoddur.
// getYearsBeforeRetirement — pensiyaya qədər istifadəçinin qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.


// const rauf = {
//     age: 56,

//     setAge(checkAge) {
//         if (checkAge >= 0) {
//             this.age = checkAge;
//         } else {console.log("Yaş mənfi yazıla bilməz");}
//     },

//     getYearsBeforeRetirement() {
//         const retirementAge = 65;
//         if (this.age >= retirementAge) {
//             return 0;
//         } else {return retirementAge - this.age;}
//     }
// };

// console.log(`Yaş ${rauf.age}`);
// console.log(`Pensiya vaxtına qalıb ${rauf.getYearsBeforeRetirement()}`);




