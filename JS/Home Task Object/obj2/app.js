// 1. Car adinda constructor function yaradın, marka,model,year,engine deyə key-ləri olsun.
// Bu constructor vasitəsi ilə 3 fərqli obyekt yaradın

// function Toyota(marka, model, year, engine,){
//     this.marka = marka;
//     this.model = model;
//     this.year = year;
//     this.engine=engine;

//     this.company = function (){
//         return `${this.marka} make a ${this.model}`;
//     };

// }

// let vehicle = new Toyota("Toyota","Prado","2013","2.7 (163 HP) Engine");

// console.log(vehicle.company());


// 2. size bir obyekt veriləcək.Həmin obyekti referansı ilə birlikdə kopyalayıb ikinci obyektə mənimsədin.İkinci obyektin name xüsusiyyətini,birinci obyektin username xüsusiyyətini dəyişin.Baş verən dəyişikliklər barədə öz fikirlərinizi yazın

// // Referance Object
// const user1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     }
// }

// const user2 = user1;
// user2.username = "Johny"

// console.log(user1);
// console.log(user2);


// 3. Object.assign() metodunu istifadə edin və nə işə yaradığı barədə məlumat yazın


// const user1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     }
// }

// const user2 = {};

// Object.assign(user2, user1);

// console.log(user1);
// console.log(user2);




// 4. Spread və rest operatorları arasındakı fərqi izah edin.Hər ikisinin istifadəsinə aid nümunələr yaın

// Spread (Massivi istədiyimiz dəyişənə əlavə edirik)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const result = [...arr1, ...arr2];
// console.log(result);


// Rest (Birinci element birinci sözü mənimsəyir digərləri ikinci elementə)

// function greetAll(firstGreeting, ...names) {
//     console.log(firstGreeting);
//     console.log(names);
// }

// greetAll("Hello", "John", "Jane", "Mike");


// 7. existsAndTruthy() adinda funksiya yaradin. 2 ədəd argument alır: obyekt(obj) ve string (propertyName). Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes:
// existsAndTruthy({a:1,b:2,c:3},'b') // true

// function existsAndTruthy(first , second) {

// }

// let name = prompt("Elementi test edin: ").toLowerCase();

// console.log(existsAndTruthy({a:1,b:2,c:3},'b')); // true
// console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y')); // false (obyektde 'y' var amma falsy-di ona gore false)
// console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z')); // false (obyektde 'z' yoxdu ona gore false)