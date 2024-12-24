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


// function check(inputText){
//     let number = "";
//     for(let i = 0; i <inputText.length; i++){
//         let search_num = inputText[i];
//         if (!isNaN(search_num)) {
//             number = number + search_num;
//         }
//     };
//     return number;
// }

// let text = prompt("Input").toLowerCase();
// let result = check(text);
// document.write(result)


// 6.Remove all exclamation
// Funksiya yazın.Arqument olaraq string alsın,sözün içərisindəki bütün nida işarələrini silsin və sözün sonuna bir ədəd nida işarəsi əlavə etsin. məsələn: He!llo! !!FE-25 // netice olmalıdır Hello FE-25!

// function removal(check) {
//     let del = check.match(/!/);
//     if (del) {
//         let count = del[0].length;
//         check = check.slice(count);
//         check = check + "!".repeat(count);
//     }
//     return check;
// }

// let word = prompt("Text daxil edin (! simvolu elave edin):").toLowerCase();
// let result = removal(word);
// document.write(result);


// 7.Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana yazdırsın

// let word = prompt("Input Text:");
// let build = word[0].toUpperCase() + word.slice(1).toLowerCase();

// document.write(build);


// 8.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini böyütsün və ekarana yazdırsın

// let word = prompt("Input Text:").toUpperCase();
// document.write(word);


// 9.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini kiçiltsin və ekarana yazdırsın

// let word = prompt("Input Text:").toLowerCase();
// document.write(word);



// 10.Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf) ilkHerfiDeyis('Qara', "Y") // Yara

// function change(word){
//     if (word) {
//         word = word.replace(word[0], "Y");
//         return word;
//     }
// };

// let input = "Qara";
// let result = change(input);
// document.write(result);


// 11. funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin nameFormat(str) —> Ramin Mammadzada-=> M. Ramin

// function name_formatter(full_name) {
//     let parts = full_name.split(" ");
//     let first = parts[0];
//     let last = parts[1];
//     return `${last[0].toUpperCase()}.${first}`
// }

// let input = prompt();
// let result = name_formatter(input);
// document.write(result);


// 12. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, abcdf@gmail.com meselen) //true

// function verify(address){
//     let parts = address.split("@");
//     let first = parts[0];
//     let second = parts[1];
//     if (address) {
//         second === "@gmail.com";
//         return `Your Email Address Is Correct: ${first}@${second}`; //true
//     }else{"Your Email Address Incorrect , Please use only GMAIL.COM"}; //false
// }

// let input = prompt();
// let result = verify(input);
// document.write(result)


// 13. Funksiya yazın,aldığı paramterdə bütün hərflər böyükdürsə true deyilsə false qaytarsın

// function checker(upcase){
//     if (upcase === upcase.toUpperCase()) {
//         return true;     
//     }
//     else{return false;}
// };

// let input = prompt();
// let result = checker(input);
// document.write(result);


// 14. Funksiya yazın.Cümlə alacaq parametr olaraq.Funksiya isə cümlənin ilk 5 simvolunu geri qaytaracaq

// Method 1

// function checker(symbol) {
//     if (symbol.length >= 5) {
//         return symbol.substring(0, 5); // Birinci 5 herfi gorsedir
//     } else {
//         return "Söz 5 simvoldan azdır";
//     }
// }

// let input = prompt("Введите строку:");
// let result = checker(input);
// document.write(result);


// Method 2

// function checker(symbol){
//     if (symbol.length >= 5) {
//         let count = "";
//         for(let i = 0; i < 5; i++){
//             count = count + symbol[i];
//         }
//         return count;
//     }
//     else{return "Söz 5 simvoldan azdır";}
// };

// let input = prompt().trim();
// let result = checker(input);
// document.write(result);



// 15. Funksiya yazın.Parametr alsın.Sözün içərisində nəqədər boşluq varsa hamsı - işarəsi olsun

// function changer(params) {
//     return params.replaceAll(" ", "-");
// }

// let input = prompt();
// let result = changer(input);
// document.write(result);