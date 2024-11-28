
//1. Kredit almağa uyğunluğunuzu yoxlayın: İstifadəçinin aylıq gəlirini və kredit balını alın.


// let money = Number(prompt());
// let score = Number(prompt());

// if( money >= 3000 && score >= 700){
//     console.log("Kredit almağa uyğunsunuz !!!")
// }else if(money >= 3000 && score < 700){
//     console.log("Kredit balınız çox aşağıdır")
// }else if(money < 3000 && money >= 1500 && score >= 650){
//     console.log("Kiçik bir kredit ala bilərsiniz");
// }else{console.log("Siz Kredit almağa uygun deyilsiz")};

// 2. Təqdimata uyğunluğunuzu yoxlayın: İstifadəçinin təcrübə illərini və performans qiymətləndirmə balını alın.

// let exp = Number(prompt());
// let score = Number(prompt());

// if(exp >= 5 && score >= 80){
//     console.log("Təqdimat üçün uyğunsunuz");
// }else if( exp >= 3 && exp < 5 && score >= 75){
//     console.log("Təqdimat üçün nəzərdən keçirilə bilərsiniz");
// }else if ( exp < 3 && score >= 70){
//     console.log("Təqdimat üçün yolda olursunuz, amma vaxt ala bilər");
// }else{console.log("Hazırda təqdimat üçün uyğun deyilsiniz");}

// 3. Yemək sifariş edib-etməyəcəyinizi yoxlayın: İstifadəçinin aclıq səviyyəsini 1-dən 10-a qədər al.

// let eat = +prompt();

// if (eat >= 8){console.log("Yemək sifariş edə bilərsiniz, çox acısınız");}
// else if(eat >= 5 && eat <=7){console.log("Yemək sifariş edə bilərsiniz, amma çox ac deyilsiniz");}
// else if(eat >= 3 && eat <= 4 ){console.log("Bir az gözləyə bilərsiniz");}
// else{console.log("Hələ ac deyilsiniz, yeməyə ehtiyacınız yoxdur");}


//4. Vergi geri ödəməsi alıb-almayacağınızı yoxlayın: İstifadəçinin illik gəlirini və asılı olan şəxslərinin sayını alın.

// let cashback = +prompt();
// let person = +prompt();

// if( cashback <= 30000 && person >= 2){console.log("Vergi geri ödəməsi alırsınız");}
// else if(cashback < 50000 && person >= 1){console.log("Qismən vergi geri ödəməsi ala bilərsiniz");}
// else if(cashback >= 50000){console.log("Vergi geri ödəməsi almırsınız");}
// else{console.log("Vergi geri ödəməsi uyğunluğunuz gəlirinizə və asılılarınızın sayına bağlıdır");}


//5.Parka girib-girməyəcəyinizi yoxlayın: İstifadəçinin yaşını və biletini alın.

// SUALIN QURULUŞUNDA SƏHFLİK VARDI

// let age = +prompt();
// let ticket = Boolean(prompt());

// if(age < 5){console.log("Parka pulsuz giriş");}
// else if(age >= 5 && ticket === true){console.log("Parka girə bilərsiniz");}
// else if(age >= 5 && age < 60 && ticket === false){console.log("Parka girmək üçün bilet almalısınız");}
// else if(age >= 60){console.log("Yaşlılara xüsusi giriş");}
// else{console.log("Giriş üçün biletlərinizi təqdim edin");}


// 6. Sürücülük vəsiqəniz olub-olmamasını yoxlayın: İstifadəçinin yaşını və sürücülük vəsiqəsini alın.

// let age = +prompt("Yaşınızı daxil edin:"); 
// let license = prompt("Sürücülük vəsiqəniz varmı? (yes/no)").toLowerCase();


// if (age >= 18 && license === "yes") {
//     console.log("Sürmək hüququnuz var");
// } else if (age >= 16 && license === "yes") {
//     console.log("Yalnız müşahidə altında sürə bilərsiniz");
// } else if (age >= 16 && license === "no") {
//     console.log("Sürmək üçün sürücülük vəsiqəsi almalısınız");
// } else if (age < 16) {
//     console.log("Sürmək üçün kifayət qədər yaşınız yoxdur");
// } else {
//     console.log("Sürmək üçün sürücülük vəsiqəsi almalısınız");
// }


// 7. Kredit almağa uyğunluğunuzu yoxlayın: İstifadəçinin yığımını və kredit istədiyi məbləği alın.

// let dollar = +prompt("Yığımınızı daxil edin:"); 
// let credit = +prompt("Kredit istədiyiniz məbləği daxil edin:");

// if (dollar <= 0) {
//     console.log("Sizin pulunuz 0 dan aşagı ola bilməz");
// }else if (credit <= 0) {
//     console.log("Kredit məbləği 0 dan aşagı ola bilməz");
// }else if (dollar >= credit * 0.5) {
//     console.log("Krediti heç bir problem olmadan ala bilərsiniz");
// }else if (dollar >= credit * 0.2) {
//     console.log("Həmçinin cosigner ilə kredit ala bilərsiniz");
// }else if (dollar < credit * 0.2) {
//     console.log("Kredit üçün girov tələb oluna bilər");
// }else {console.log("Kredit üçün uyğun deyilsiniz");}





///////////////// BIRINCI OLARAQ ÖZÜM ETDİM TESTLƏRİ SONRAM BİR BİR YOXLADIM

// alert((null && 2) || (3 && 4) || 5); //mənim cavabım: true düzgün cavab : 4

// alert((1 || 0) && (null || 2) && (undefined || "Hello")); // mənim cavabım: undefine düzgün cavab : hello

// alert(!0 && (false || (3 && "Yes")) || "No"); // mənim cavabım: true düzgün cavab : yes

// alert((5 > 3 || false) && (null || (7 && "Good")) && !0); // mənim cavabım: false düzgün cavab : true

// alert((10 > 5 && 3 < 8) || (false && 1) || (0 || "Result")); // mənim cavabım: true düzgün cavab : true

// alert((false || 8 > 3) && (0 || "Hi") && (null || 7)); // mənim cavabım: 7 düzgün cavab : 7

// alert(!(undefined && 5) || (!!0 || (3 && "Yes"))); // mənim cavabım: true düzgün cavab : true

// alert((4 && 2) > (3 || 1) && (0 || "End")); // mənim cavabım: false düzgün cavab : false

// alert((null ?? 5) && (undefined || 10) || (false ?? "Hello")); //mənim cavabım: false düzgün cavab : 10

// alert((0 || "Hello") && (false || "World") && 42); // mənim cavabım: 42 düzgün cavab : 42

// alert(((5 > 2 && 3 < 6) || 0) && ("Hi" || false)); // mənim cavabım: Hi düzgün cavab : Hi

// alert((10 > 2 && "Yes") || (false && "No") || (3 > 1 && "Maybe")); // mənim cavabım: Yes düzgün cavab : Yes

// alert((false || 0 || undefined) && (null || 2) || (!1 && "Done")); // mənim cavabım: false düzgün cavab : false

// alert(!((null || 5) && (10 > 2 || false)) || (undefined ?? "Fallback")); // Ders vaxtı yoxlanılıb

// alert((true && "Result") || (false ?? 0) && (null || 42)); // mənim cavabım: 42 düzgün cavab : result

// alert(false || 5 && 10 || "Bye"); // // mənim cavabım: 10 düzgün cavab : 10