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



// Task-04 Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
// Toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.

// const calc = {
//     num1: 0,
//     math: "",
//     num2: 0,
// };

// let firstNum = +prompt("First number");
// let mathOption = prompt("Choose option ( + - * / %)");
// let secondNum = +prompt("Second number");

// if (firstNum >= 0 && secondNum >= 0 && (mathOption === "+" || mathOption === "-" || mathOption === "*" || mathOption === "/" || mathOption === "%")) {
//     calc.num1 = firstNum;
//     calc.math = mathOption;
//     calc.num2 = secondNum;
//     if (calc.math === "+") {document.write(`Result: ${calc.num1 + calc.num2}`);} 
//     else if (calc.math === "-") {document.write(`Result: ${calc.num1 - calc.num2}`);} 
//     else if (calc.math === "*") {document.write(`Result: ${calc.num1 * calc.num2}`);} 
//     else if (calc.math === "/") {
//         if (calc.num2 === 0) {document.write("Error: Sıfıra bölünmür.");} 
//         else {document.write(`Result: ${calc.num1 / calc.num2}`);}
//     } else if (calc.math === "%") {
//         if (calc.num2 === 0) {document.write("Error: Sıfıra bölünmür.");} 
//         else {document.write(`Result: ${calc.num1 % calc.num2}`);}
//     }
// } else {document.write("Error: 0 dan aşağı rəqəm və yaxud yalnış əməliyyat.");}



// Task-05. propertyTaker() adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni ekrana cixarsin
// propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent') // 'Asia'
// propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country') // 'Sweden'
// propertyTaker({name:'roma', age:12}, 'name') // 'roma'

