// 1. Bir array-də, yalnız ədədi 3 ilə bölünən ədədləri çıxarıb qalanları toplamaqla bir nəticə əldə edin.




// 2. Bir stringdə, həm kiçik, həm də böyük hərflərin neçə dəfə təkrarladığını tapın.

// //////////////// METHOD 1

// let text = "SaLaMWorLD";
// let upCase = 0;
// let lowCase = 0;
// for(let i = 0;i < text.length; i++){
//     if (text[i] === text[i].toUpperCase()) {
//         upCase++
//     }
//     else{lowCase++}
// }
// document.write(`Boyuk herifin sayi ${upCase}` + "<br>" + `Kicik herfin sayi ${lowCase}`)

// //////////////// METHOD 2

// let text = "SaLaMWorLD";
// let convert = text.split("");
// let upCase = 0;
// let lowCase = 0;
// convert.forEach(element => {
//     if(element === element.toUpperCase()){upCase++}
//     else{lowCase++}
// });
// document.write(`Boyuk herifin sayi ${upCase}` + "<br>" + `Kicik herfin sayi ${lowCase}`);




// 3. Bir array-dəki ən böyük iki ədədin cəm və hasilini tapın.




// 4. Bir stringdəki bütün böyük hərflərin sayını tapın, ardıcıl olaraq hər hansı kiçik hərflər varsa, onları silin.

// let word = "Hello World!";
// let upSymbol = 0;
// for(let i = 0; i < word.length; i++){
//     if (word[i] === word[i].toUpperCase() && /[A-Za-z]/.test(word[i])) {
//         upSymbol++
//     }
//     else{continue;}
// }
// document.write(`UpperCase Symbols Count ${upSymbol}`);



// 5. Verilmiş massivdəki bütün elementlərin ortalamasını hesablayın.
// 6. Massivdəki elementlərin yerini qarışdırın (shuffle).




// 7. Verilmiş ədədin ikili sistemdə (binary) yazılışını hesablayın. (internetde axtara bilersen,how to convert integer to binary number javascript)

// function converter(num){
//     let result = 0;
//     if (num >= 0) {
//         result = num.toString(2);
//     }
//     document.write(result);
// }
// let input = converter(5);





// 8.Verilmiş ədədin faktorialını hesablayın.




// 9. Üç qrup yoldaşının adlarından ibarət massiv yaradın; Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin; 
// İlk adı silin; Massivi konsola çıxarın.

// let univer = [" Javanshir" , " Jahangir" , " Ismail"];
// let input = "Rauf";
// univer.unshift(input);
// let result = univer.pop();
// document.write(univer);





// 10. Üç addan ibarət massiv yaradın. Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin. Massivi konsola çıxarın.

// let agents = ["Jason Bourne", "Eathan Hunt", "James Bond"]
// agents.splice(1,1,"Classified");
// document.write(agents);



// 11. Massiv verilib. "StarWars Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın. Massiv elementlərin düzün.

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// arr.forEach((e , index) => {
//     let result = `StarWars Episode: ${index + 1} ${e}` + "<br>";
//     document.write(result);
// })




// 12.İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın. 
// İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.

// let num = [5,6,7,8,9];
// let min = Math.min(... num);
// document.write(min);


// 13. Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin. '32, 31, 34, 36, 31' mətni verilmişdir 
// İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden istifadə ederek

// let num = [32, 31, 34, 36, 31];
// let result = num.join(",").replaceAll(",",";");
// document.write(result);


// 14. İki array verilib. Bu iki array-i birləşdirin və təkrarlanan elementləri aradan qaldırın.

// let arrOne = ["HTML","CSS","JS","PHP"];
// let arrTwo = ["C#","GoLang","JS","Python"];
// arrOne.forEach(element => {
//     if (arrTwo.includes(element)) {
//         document.write(`Bu adlar her iki array-da movcuddur: ${element}<br>`);
//     }
// });



// 15. İki array verilib. Bu iki array-dən yalnızca ilk array-də olub, ikinci array-də isə olmayan elementləri tapın.

// let arrOne = ["HTML","CSS","JS","PHP"];
// let arrTwo = ["C#","GoLang","JS","Python"];
// arrOne.forEach(element => {
//     let found = false;
//     for(let i = 0;i < arrTwo.length; i++){
//         if (arrTwo[i] === element) {
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         document.write(`Bu ad her iki array-da movcud deyildir: ${element}<br>`);
//     }
//     else{document.write(`Bu ad her iki array-da movcuddur: ${element}<br>`);}
// });





// 16. Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri qaytaran 
// sortArray() funksiyasını yazın. " [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,] "

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,];
// array.sort((a,b) => {return a-b;});
// document.write(array);




// 17.Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, 
// yoxdursa uyğun mesajı geri qaytaran funksiya yazın. 

// BU TESTI ANLAMADIM!!!!!!!!





// 18. Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı qaydalarla dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın: mənfi ədədlər müsbət olublar; müsbət ədədlər ikiqat artırılıb.
// Input:  [1, 5, -7, 3, -9, 4, -6, 2];
// Output: [2, 10, 7, 6, 9, 8, 6, 4]




// 19. Adlar massivi verilib. Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir. Həmin massivdə "A" hərfi ilə başlayan 
// elementlərdən ibarət yeni massiv yaradıb, elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.

// let namesArray = [
//   "Alice",
//   "Bob",
//   "Catherine",
//   "David",
//   "Eva",
//   "Andrew",
//   "Frank",
//   "Anna",
//   "George",
//   "Alex",
// ];


// 20.Bir array-dəki hər bir ədədin 2 qatını alıb yeni bir array yaradın.

// 21.Müəyyən bir ədədin array-də olub olmadığını yoxlayın.
 
// 22.Array-dəki bütün müsbət ədədləri bir array-də toplayın.

// 23.Array-dəki ən kiçik ədədin hansı olduğunu tapın.

// 24.Array-dəki bütün ədədlərin cəmindən böyük olan bir ədəd tapın.

// 25.Bir array-dəki bütün ədədlərin kvadratını alıb yeni bir array yaradın.

// 26.Array-dəki heç olmasa bir ədədin 5-ə bölünməsini yoxlayın.

// 27.Array-dəki bütün ədədlərin müsbət olduğunu yoxlayın.

// 28.Array-dəki sözlərdən yalnız uzunluğu 5 və daha çox olanları seçin.

// 29.Array-dəki ən böyük ədədin tapılmasını təmin edin.

// 30.Array-dəki ən kiçik ədədin tapıldığı halda həmin ədədi silin.

// 31.Array-də "JavaScript" sözünü tapın və tapıldıqda həmin sözün yerini dəyişdirin.

// 32.Array-dəki bütün adları kiçik hərflərlə yazın.

// 33.Bir array-də olan hər bir elementin 3 ilə vurulmuş formasını yaradın.

// 34.Array-dəki cüt ədədləri filtrləyin və yeni bir array yaradın.

// 35.Array-dəki sözlərin uzunluğuna əsasən onları artan sıraya düzün.

// 36.Array-də ən azı bir ədədin 3-ə bölünən olub olmadığını yoxlayın.

// 37.Array-dəki bütün elementlərin tərsini qaytarın.

// 38.Array-dəki müəyyən bir sözü tapın və o sözü dəyişdirin.