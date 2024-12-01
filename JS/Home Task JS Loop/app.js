// Task-01
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın.
// Son dəyəri konsola çıxarın

// let num = +prompt("İkirəqəmli ədəd daxil edin");

// if (num >= 10 && num <= 99) {
//     for (let i = 0; num < 100; num += 7) {
//         console.log(num);
//     }
//     if (num >= 100) {
//         console.log(num);
//     }
// }


// Task-02
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

// let num = +prompt();

// for(let i = 0; i < num; i++){
//     console.log("I know how to use cycles");
// }


// Task-03
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// for(let i = 100; i <= 999; i++){
//     if(i % 10 === 0){
//         console.log(i);
//     }
// }

// Task-04
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// let total = 0;
// for(let i = 10; i <= 99; i++){
//     total = total + i;
// }console.log(total);


// Task-05
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
// Proqram istifadəçidən ədəd daxil etməyi xahiş edir. Bundan sonra proqram konsolda bu rəqəmin
// bölünəni olan bütün üçrəqəmli ədədlərin cəmini çıxarır.


// Task-06
// Sadə ədədləri çıxaran proqram yazın.
// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün tek ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
// «16» ədədi daxil edildikdə, konsola «15», «13», «11», «9», «7», «5», «3», «1» ardıcıllığı çıxarılmalıdır.

// let num = +prompt();

// for(let i = num - 1; i > 0; i--){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }


// Task-07
// 10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin
// For dövrün köməyi ilə 10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin.
// Alınan dəyəri konsola çıxarın.


// Task-08
// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// let word = prompt().toLowerCase();
// let reverse = "";

// for(let i = word.length - 1; i >= 0; i--){
//     reverse = reverse + word[i];
// }console.log(reverse);


// Task-09
// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// let text = prompt().toLowerCase();
// let index = 0;

// for(let i = 0; i < text.length; i++){
//     if(index[i] === "."){
//         index = i;
//         break;
//     }
// }