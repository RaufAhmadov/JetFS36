"use strict";


// 1. İki array verilib. Bu iki array-i birləşdirin və təkrarlanan elementləri aradan qaldırın.

// const newArr1 = ["WebDev","Pentest","Network","Support", "Administrator"];
// const newArr2 = ["Python","OSCP","CCNA","Support", "Server"];
// const extendedArr = [...newArr1, ...newArr2];
// let filteredWord = extendedArr.filter((item, index) => extendedArr.indexOf(item) === index);
// document.write(filteredWord);



// 2. İki array verilib. Bu iki array-dən yalnızca ilk array-də olub, ikinci array-də isə olmayan elementləri tapın.

// const newArr1 = ["HTML","CSS3","JS","Python","PHP"];
// const newArr2 = ["HTML","CSS3","Python","PHP"];
// const uniqueArr = newArr1.filter(item => !newArr2.includes(item));

// document.write(`1-ci Arr-da olan amma 2-ci Arr-da olmayan: ${uniqueArr}`);


// 3. Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri qaytaran sortArray() funksiyasını yazın.

// function sorted(sort){
//     return sort.sort(function(a,b){return a-b;});
// }

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,];
// let result = sorted(array);
// document.write(result);



// 4.Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, yoxdursa uyğun mesajı geri funksiya yazın.

// function checker(arr_check){
//     return arr_check.filter(function(num){return num < 0;});
// }

// let input = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,];
// let result = checker(input)
// document.write(result);



// 5. Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper() funksiyasını yazın.

// function kebabToUpper(upcase){
//     return upcase.toUpperCase();
// }

// let input = prompt().trim();
// let result = kebabToUpper(input)
// document.write(result);



// 6. Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı qaydalarla dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
// mənfi ədədlər müsbət olublar, müsbət ədədlər ikiqat artırılıb. Input:  [1, 5, -7, 3, -9, 4, -6, 2]; Output: [2, 10, 7, 6, 9, 8, 6, 4]


// function update(numbers) {
//     return numbers.map(function(num) {
//         if(num < 0){
//             return Math.abs(num);
//         }
//         else{return num * 2};
//     });
// }

// let input = [1, 5, -7, 3, -9, 4, -6, 2];
// let result = update(input)
// document.write(result);


// 7. Adlar massivi verilib. Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir. Həmin massivdə "A" hərfi ilə başlayan elementlərdən ibarət yeni massiv yaradıb, elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.