// Task-01
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın.
// Son dəyəri konsola çıxarın

// let num = +prompt("İkirəqəmli ədəd daxil edin:");
// if (num >= 10 && num < 100) { 
//     for (let i = num; ; i += 7) { 
//         if (i >= 100) {
//             console.log("Üçrəqəmli rəqəm:", i); 
//             break;
//         }
//     }
// }else {console.log("Xahiş edirik, yalnız ikirəqəmli ədəd daxil edin.");}



// Task-02
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

// let num = 25;
// let word = "I know how to use cycles";

// for (let i = 0; i < num; i++) {
//     console.log(word);
// }


// Task-03
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// let num = +prompt("100 ve 990 diapazonunda reqem yaz");
// if (num >= 100 && num <= 990) {
    
//     for (let i = num; i <= 990 ; i++) {
//         if(i % 10 === 0){
//             console.log(i);
//         }
//     };
// }else { console.log("reqem diapazonu 100 ve 990 arasidir.");}


// Task-04
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// let num = +prompt();

// if (num >= 10 && num <= 99) {
//     let sum = 0;
//     for (let i = num; i <= 99; i++ ) {
//         if (i % 2 !== 0) {
//             console.log(i);
//             sum = sum + i;
//         }
//     };console.log(`Tek ededlerin cemi ${sum}`);
// }else{console.log("Get tezden gelersen!!");}



// Task-05
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
// Proqram istifadəçidən ədəd daxil etməyi xahiş edir. Bundan sonra proqram konsolda bu rəqəmin
// bölünəni olan bütün üçrəqəmli ədədlərin cəmini çıxarır.


// Task-06
// Sadə ədədləri çıxaran proqram yazın.
// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün tek ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
// «16» ədədi daxil edildikdə, konsola «15», «13», «11», «9», «7», «5», «3», «1» ardıcıllığı çıxarılmalıdır.

// let num = +prompt();

// for (let i = num; i > 0; i--) {
//     console.log(i);
// }


// Task-07
// 10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin
// For dövrün köməyi ilə 10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin.
// Alınan dəyəri konsola çıxarın.

// let num = +prompt("Введите число:");
// let sum = 1;
// for (let i = num; i <= 10; i++) {
//     sum = sum * i;
// }console.log(`Произведение чисел от ${num} до 10 = ${sum}`); 



// Task-08
// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.


// let word = String(prompt());
// let reverse = "";
// if (typeof word === "string") {
//     for (let i = word.length - 1; i >=0; i--) {
//         reverse = reverse + word[i];
//     }
//     console.log(reverse);
// }


// Task-09
// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// let word = prompt();

// for (let i = word.length; i >= 0 ; i--) {
//     if (word[i] === ".") {
//         console.log("Noqte ilk olaraq " + i + " index de tapildi");
//         break;
//     }
// }