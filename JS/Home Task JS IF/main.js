// 1. heftenin gunlerini tapan proqram yaziriq prompt ile heftenin necenci gunu oldugunu aliriq (1-7 arasinda reqem olmalidir)
//eger deyer === 1 ekrana yazdirin bu gun bazar ertesidir ve.s
// bu taski hem if else hemde switch case ile yazin

// IF ELSE

// let check = +prompt();

// if(check >=1 && check <= 7){
//     if( check === 1){
//         document.write("Monday");
//     }else if( check === 2){
//         document.write("Tuesday");
//     }else if( check === 3){
//         document.write("Wednesday");
//     }else if( check === 4){
//         document.write("Thursday");
//     }else if( check === 5){
//         document.write("Friday");
//     }else if( check === 6){
//         document.write("Saturday");
//     }else if( check === 7){
//         document.write("Sunday");
//     }    
// }else {document.write("daxil etdiyiniz reqəm 1 -dən az və 7 -dən çox ola bilməz");}

// SWITCH CASE

// let check = +prompt("Enter a number between 1 and 7:");

// switch (check) {
//     case 1:
//         result = "Monday"
//         break;
//     case 2:
//         result = "Tuesday"
//         break;
//     case 3:
//         result = "Wednesday"
//         break;
//     case 4:
//         result = "Thursday"
//         break;
//     case 5:
//         result = "Friday"
//         break;
//     case 6:
//         result = "Saturday"
//         break;
//     case 7:
//         result = "Sunday"
//         break;
//     default:
//         result = "The number must be between 1 and 7.";
//         break;
// }
// document.write(result);



// 2. ilin aylarini tapan proqram yaziriq prompt ile ilin necenci ayi oldugunu aliriq (1-12 arasinda reqem olmalidir)
//eger deyer === 1 ekrana yazdirin bu ay yanvar ayidir ve.s
// bu taski hem if else hemde switch case ile yazin

// let check = +prompt("Enter a number between 1 and 12:");

// switch (check) {
//     case 1:
//         result = "January"
//         break;
//     case 2:
//         result = "February"
//         break;
//     case 3:
//         result = "March"
//         break;
//     case 4:
//         result = "April"
//         break;
//     case 5:
//         result = "May"
//         break;
//     case 6:
//         result = "June"
//         break;
//     case 7:
//         result = "July"
//         break;
//     case 8:
//         result = "August"
//         break;
//     case 9:
//         result = "September"
//         break;
//     case 10:
//         result = "October"
//         break;
//     case 11:
//         result = "November"
//         break;
//     case 12:
//         result = "December"
//         break;
//     default:
//         result = "The number must be between 1 and 12.";
//         break;
// }
// document.write(result);


// 3. dersde yazdigimiz kimi gender yoxlayan proqram yazin bu taski hem if else hemde switch case ile yazin

// let gender = String(prompt().toLowerCase());

// if (gender === 'man' || gender === 'male'){
//     document.write("You are male");
// }else if(gender === 'woman' || gender === 'female'){
//     document.write("You are female");
// }else {document.write(`${gender} is invalid gender `);}


// 4. Bir party var.Bu partyde yaxsi qardaslar ve gozel xanimlar istirak edecek.
// Eger yas 18den boyukdurse ekrana yazilsin salam salam cenab ve ya xanim istifadeciden gelen ad
// istifadeciden alacaqlarimiz
// name,gender,age ve burda gender yoxlamasini if else ile age yoxlamasini ise ternary operatoru ile edin...

// let name = String(prompt("Type your name").trim().toLowerCase());
// let gender = String(prompt("Type your gender (Male / Female)").trim().toLowerCase());
// let age = +prompt("Type your age").trim();

// if(name && age >= 18 && (gender === 'male' || gender === 'female')){
//     document.write(`Welcome to the party, ${name}. Your age is ${age}, you have accepted to entry, and your gender is ${gender}.`);
// }else if(gender !== 'male' && gender !== 'female'){
//     document.write("Choose your gender is correctly (Male / Female)");
// }else {document.write("Sorry, entry is not allowed. Make sure your details are correct.");}



// 5. ev almaga gedmisik.Evin kvadrati 2000den coxdurse ve evin qiymeti 99.999-dursa ve eynile valyuta azn-e beraberdirse evi aliram
// eks halda hec bir hal mene maraqli deyil

// let area = +prompt("Neçə KV ev almaq isteyirsiniz ?");
// let price = 2000;
// let sum = area * price;
// if(sum <= 99999){
//     document.write(`Ev alıram ${area} Kv mənim üçün ${sum} dəyərində uyğundur`);
// }else{document.write("Ev almıram "+ sum +" bahadı");}