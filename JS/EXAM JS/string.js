"use strict";


// 0. Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin ++++++++++++++++++++

// function math(num1 ,num2){
//     return Math.min(num1 , num2);
// }

// let input1 = 4;
// let input2 = 2;
// let get = math(input1 , input2);
// document.write(get);





// 1. Palindrome Testi: Verilən stringin palindrome (yəni, ön və arxa oxunuşu eyni - meselen,ana,ata) olub olmadığını yoxlayın. ---------------------

// function isPalindrome(str) {
//     let rev = str.reverse();

//     if (rev == str) {
//         return true
//     }
//     return false

// }

// let input = "racecar";
// let get = isPalindrome(input)





// 2. Stringi Tersine Çevirmək: Verilən bir stringi əksinə çevirin. ++++++++++++++++++++

// function reverse(string) {
//     let word = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         word += string[i];
//     }
//     return word;
// }

// let input = "Hello";
// let get = reverse(input);
// document.write(get);







// 3. Stringin Hərf Sayını Tapın: Verilən bir stringdəki hərflərin sayını tapın.








// 5. Bir Stringdəki Vowel (Səsli Hərfləri) Sayın: Verilən stringdəki səsli hərflərin (a, e, i, o, u) sayını tapın. ++++++++++++++++++++

// function find(str){
//     let newArr = ["a", "e", "i", "o", "u"];
//     for(let i = 0; i < str.length; i++){
//         if(newArr.includes(str[i])){
//             return "This word is hase Vowel";
//         }
//         else{return "This word not hase Volwe"}
//     }
// }

// let input = prompt().trim().toLowerCase();
// let get = find(input);
// document.write(get);






// 6. Stringin İçindəki Digər Hərfləri Sayın: Verilən stringdəki səsli olmayan hərfləri sayın.






// 7. Stringin Hərflərini Böyük etmək: Verilən stringi böyük hərflə yazın. ++++++++++++++++++++

// function big(upString){
//     let change = upString.toUpperCase();
//     return change;
// }

// let input = "word";
// let get = big(input);
// document.write(get);










// 8. Stringin Hərflərini Kiçik etmək: Verilən stringi kiçik hərflə yazın. ++++++++++++++++++++

// function name(params) {
//     return params.toLowerCase();

// }

// let input = "HELLO";
// let get = name(input);
// document.write(get)





// 9. Stringdəki Müəyyən Bir Hərfi Tapın: Verilən bir stringdə müəyyən bir hərfin olub olmadığını yoxlayın. ++++++++++++++++++++


// function findWord(str){
//     let find = "i";
//     for(let i = 0; i < str.length; i++){
//         if(find.includes(str[i])){
//             return find;
//         }
//     }
// }

// let input = "string";
// let get = findWord(input);
// document.write(get);



// 10. Stringdəki Unikal Hərfləri Tapın: Verilən bir stringdə təkrarlanmayan, unikal hərfləri tapın. ++++++++++++++++++++

// function filter(params) {
//     const newArr = ["a","b","c","d","e"];
//     const result = newArr.filter(item => params.includes(item));
//     document.write(result);
// }

// let input = "applebanancitrus"
// let get = filter(input);





// 11. Stringdəki Böyük Hərfləri Kiçik Edin: Bir stringdəki bütün böyük hərfləri kiçik hərflərə çevirin.

// 12. Stringdəki Kiçik Hərfləri Böyük Edin: Bir stringdəki bütün kiçik hərfləri böyük hərflərə çevirin.





// 13. Bir Stringin İçindəki Boşluqları Silin: Verilən stringdəki bütün boşluqları (whitespace) silin. ++++++++++++++++++++

// function deleter(params) {
//     let result = params.replace(" ", "")
//     document.write(result);
// }

// let input = "Hello World";
// let get = deleter(input);






// 14. Stringdəki İlk və Son Simvolları Yoxlayın: Verilən stringin ilk və son simvollarının eyni olub olmadığını yoxlayın. ++++++++++++++++++++


// function check(str) {
//     if (str[0] === str[str.length - 1]) {
//         document.write(str + "<br>");
//         return true;
//     }
//     return false;
// }

// let input = "racecar";
// let get = check(input);
// document.write(get + "<br>");