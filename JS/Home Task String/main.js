"use strict";


// Bu metodları yoxla replaceAll() , toLowerCase(), toUpperCase, Trim(), concat(), repeat(), split()

// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

// let number = +prompt("bura max 2 reqemli eded yazin");

// for(;String(number).length < 3;) {
//     number += 7;
// }
// document.write(`3 reqemli reqem : ${number}`);



// 2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın. Proqram N ədədini istifadəçidən soruşur.

// Method 1

// let word = "I know how to use cycles";

// for(let i = 0; i <= 5; i++){
//     document.write(word + "<br/>");
// };

// Method 2 (yeni sətrə keçid etmək olmadı)

// let word = "I know how to use cycles";
// document.write(word.repeat(5));



// 3.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// let user = prompt("Ad və Soyadınızı daxil edin:");

// if (/^[A-Za-zА-Яа-яЁё\s]+$/.test(user)) {
//     let check = user.trim().toLowerCase().split(" ");
//     let revers = check[1] + " " + check[0];
//     document.write(revers);
// } else {
//     document.write("Xahiş edirik yalnız ad və soyad daxil edin. (Çəkilər, nömrələr daxil etməyin.)");
// }


// 4.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.

// function isValidateNumber(value){
//     let check = Number(value);
//     if(check){
//         return true;
//     }
//     else{return false;}
// }

// let input = prompt();
// let result = isValidateNumber(input)
// document.write(result)



// 5.Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın.Məsələn: "hell5o wor6ld" -> 56



