"use strict";

//* 1
// Напиши скрипт, який, для об'єкта user, послідовно:

//1 додає поле mood зі значенням 'happy'
//2 замінює значення hobby на 'skydiving'
//3 замінює значення premium на false
//4 виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "ivan",
  hobby: "reading",
  premium: true,
};
//1
user.mood = "happy";
console.log(user);

//2
user.hobby = "skydiving";
console.log(user);

//3
user.premium = false;
console.log(user);

//4
const keys = Object.keys(user);
console.log(keys); //[ 'name', 'hobby', 'premium', 'mood' ]

for (let key of keys) {
  console.log(key);
  //name
  // hobby
  // premium
  // mood
  console.log(user[key]);
  // name
  // ivan
  // hobby
  // skydiving
  // premium
  // false
  // mood
  // happy
}

//*2
//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const randomObj = {
  name: "something",
  age: 20,
  premium: true,
  online: false,
};

const countProps = (count) => {
  let key = Object.keys(count);
  return key.length;
};
console.log(countProps(randomObj)); //4

//* 3
//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const findBestEmployee = (employees) => {
  const keys = Object.keys(employees);
  let maxResult = employees[keys[0]];
  let bestEmpleyee = keys[0];

  for (let key of keys) {
    if (employees[key] > maxResult) {
      maxResult = employees[key];
      bestEmpleyee = key;
    }
  }
  return bestEmpleyee;
};

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); //lux

//* 4
//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = (employees) => {
  const values = Object.values(employees);
  console.log(values);
  let totalSalary = 0;
  for (let value of values) {
    totalSalary += value;
  }
  return totalSalary;
};

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);

//* 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  const items = [];
  for (let prooduct of arr) {
    if (prooduct[prop] === undefined) {
      break;
    }
    items.push(prooduct[prop]);
  }
  return items;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

//* 6
//Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
//Викличи функції для перевірки працездатності твоєї реалізації.

const products2 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
  let totalPrice = 0;
  for (let product of allProdcuts) {
    if (productName === product.name) {
        totalPrice = product.price * product.quantity
    }
  }
  return totalPrice
};

console.log(calculateTotalPrice(products2, 'Радар'));//5200

console.log(calculateTotalPrice(products2, 'Дроїд'));//2800
