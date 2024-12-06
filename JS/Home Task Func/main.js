
// Boş duranı Allah sevməz, kod yazın...


// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// function user(name){
//     document.write(`user ${name} is active now <br/>`);
// }

// user(prompt("Enter the first username:").toLowerCase());
// user(prompt("Enter the second username:").toLowerCase());
// user(prompt("Enter the third username:").toLowerCase());



// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın


// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");
// let num3 = +prompt("Enter the third number:");

// function bignum(first , second, third){
//     if(first > second && first > third){
//         document.write(`${first} bigger than ${second} and ${third}`);
//     }else if(second > first && second > third){
//         document.write(`${second} bigger than ${first} and ${third}`);
//     }else if( third > first && third > second ){
//         document.write(`${third} bigger than ${first} and ${second}`);        
//     }else{document.write("All numbers are equal or invalid input");}
// }

// bignum(num1 , num2, num3);


// Task-03
// Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

// let usdToRub = +prompt("1 USD-nin Rub-la olan kursunu yazin");
// let usdInWallet = +prompt("USD mebleginizi yazin");
// let rubInWallet = +prompt("Nagd olan RUB mebleginizi yazin");

// function bankWallet(usdInBank, rubInBank, rate) {
//     let convert = usdInBank * rate;
//     let totalRub = rubInBank + convert;
//     return `Bank hesabinda olan ${totalRub} RUB bunun nagd olan hissesi ${rubInBank} RUB , Dollar olaraq ${usdInBank} USD (kurs: 1 USD = ${rate} RUB)`;
// }

// let result = bankWallet(usdInWallet, rubInWallet, usdToRub);
// document.write(result);



// Task-04 Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.

// let num1 = +prompt();
// let num2 = +prompt();

// function smallest(first, second) {
//     let check = Math.min(first,second)
//     return `Daxil edilen ${first} ve ${second} deyerlerinden en kicik olani ${check}`;
// }

// let result = smallest(num1, num2)
// document.write(result);


// Task-05
// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+'); // 10 qaytaracaq

// let num1 = +prompt("Birinci eded");
// let num2 = +prompt("Ikinci eded");
// let selectParametr = prompt("Parametri daxil edin (+)")

// function calc(first , parametr, second){
//     if (parametr === '+') {
//         return first + second;
//     }
//     else if(parametr !== '+'){document.write("Kalkulator yarimciqdir yalniz + etmeyi bacarir")}
// }

// let result = calc(num1,selectParametr,num2)
// document.write(result);




// Task-06 İstifadəçidən bir ay adı daxil etməsini tələb edən və həmin ayın neçə gün çəkdiyini göstərən bir proqram yazın. (switch-case ilə)
// February: 28 (29 in leap years)
// March: 31
// April: 30
// May: 31
// June: 30
// July: 31
// August: 31
// September: 30
// October: 31
// November: 30
// December: 31

let check = prompt("12 aydan birini secin ve ingilis dilinde yazin").toLowerCase();

switch (check) {
    case "january":
        document.write(check + " ayinda 31 gun var");
        break;
    case "february":
        document.write(check + " ayinda 28 gun var (ilden asili olaraq 28-29 gun ola biler)");
        break;
    case "march":
        document.write(check + " ayinda 31 gun var");
        break;
    case "april":
        document.write(check + " ayinda 30 gun var");
        break;
    case "may":
        document.write(check + " ayinda 31 gun var");
        break;
    case "june":
        document.write(check + " ayinda 30 gun var");
        break;
    case "july":
        document.write(check + " ayinda 31 gun var");
        break;
    case "august":
        document.write(check + " ayinda 31 gun var");
        break;
    case "september":
        document.write(check + " ayinda 30 gun var");
        break;
    case "october":
        document.write(check + " ayinda 31 gun var");
        break;
    case "november":
        document.write(check + " ayinda 30 gun var");
        break;
    case "december":
        document.write(check + " ayinda 31 gun var");
        break;
    default:
        document.write(check + " movcud olmayan ay");
        break;
}



// Task-07 İstifadəçidən bir ədəd daxil etməsini tələb edən və bu ədədin Armstrong rəqəmi olub olmadığını yoxlayan bir proqram yazın. (dövrlə və if-else ilə)