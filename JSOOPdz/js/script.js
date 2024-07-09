"use strict";

//* 1
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

const Account = function({login, email}) {
   this.login = login
   this.email = email 
}
Account.prototype.getInfo = function() {
  console.log(`login ${this.login}, email ${this.email}`);
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com



//* 2
// Напиши клас User для створення користувача з наступними властивостями:
// name - рядок
// age - число
// followers - число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User {
  constructor({name, age, followers}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
   return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
  }
}

const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
//console.log(mango2);// User { name: 'Mango', age: 2, followers: 20 }

//console.log(mango2.getInfo()); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

console.log(poly2.getInfo()); // User Poly is 3 years old and has 17 followers




//* 3
//Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Додай методи класу:

// getItems() - повертає масив поточних товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items
  }
  addItem(item) {
   this.items.push(item);
  }
  removeItem(item) {
    items.splice(this.items.indexOf(item), 1);
  }
}


const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);


const items = storage.getItems();
console.log(items); // [ 'Нанітоіди', 'Пролонгер', 'Залізні жупи', 'Антигравітатор' ]
console.table(items);
// ┌─────────┬──────────────────┐
// │ (index) │ Values           │
// ├─────────┼──────────────────┤
// │ 0       │ 'Нанітоіди'      │
// │ 1       │ 'Пролонгер'      │
// │ 2       │ 'Залізні жупи'   │
// │ 3       │ 'Антигравітатор' │
// └─────────┴──────────────────┘

storage.addItem("Дроїд");
console.log(storage.items); //[ 'Нанітоіди', 'Пролонгер', 'Залізні жупи', 'Антигравітатор', 'Дроїд' ]
console.table(storage.items); 

storage.removeItem("Пролонгер");
console.log(storage.items); //[ 'Нанітоіди', 'Залізні жупи', 'Антигравітатор', 'Дроїд' ]
console.table(storage.items); 

//* 4
// Напиши клас StringBuilder. На вхід він отримує один параметр - рядок, який записує у властивість _value.

class StringBuilder {
  constructor(_value) {
    this._value = _value
  }
  get value() {
    return this._value
  }
  append(str) {
    return (this._value += str)
  }
  prepend(str) {
    return (this._value = str + this._value)
  }
  pad(str) {
    return (this._value = str + this._value + str)
  }
}

// Додай класу наступний функціонал:

// Геттер value - повертає поточне значення поля _value
// Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

//5
// Напиши клас Car із зазначеними властивостями і методами.
class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    console.log(maxSpeed, speed, isOn, distance, price);
  }

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкова 0
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - заведений автомобіль, значення true або false. Спочатку false
   *  distance - загальний кілометраж, спочатку 0
   */
  constructor(speed = 0, price, maxSpeed, isOn = false, distance = 0) {
    this.speed = speed
    this.price = price
    this.maxSpeed = maxSpeed
    this.isOn = isOn
    this.distance = distance
  }

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
  get price() {
    return this._price
  }
  set price(pr) {
    return this._price = pr
  }

  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.isOn = false
    this.speed = 0
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if(this.speed + value <= this.maxSpeed) {
      this.speed += value
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if(this.speed - value >= 0) {
      this.speed -= value
    }
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if(this.isOn === true) {
      this.distance += hours * this.speed
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
