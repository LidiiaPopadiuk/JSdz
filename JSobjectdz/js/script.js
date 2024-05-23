"use strict";

//1
//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

let string = prompt(
  `У вас на рахунку ${this.balance}. Хечете поповнити рахунок?`,
  ""
);
let question = prompt("Введіть суму поповнення коштів");
let newBalance;

const bankAccount = {
  ownerName: "Ivan",
  accountNumber: 108498274,
  balance: 100000,

  deposit(add) {
    if (string === true) {
      newBalance === this.balance + add;
    } else {
      alert("Дякую, що звернулися до нас");
    }
  },
  // withdraw(rest) {
  //   let string = prompt
  // }
};
bankAccount.deposit();

//* 2
//Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
  temperature: -5,
  humidity: "40%",
  windSpeed: "2km/h",

  resultTemperature() {
    if (this.temperature < 0) {
      console.log("Так, температура < 0 градусів Цельсія");
    } else {
      console.log("Ні, температура > 0 градусів Цельсія");
    }
  },
};
weather.resultTemperature();

//? 3
//Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
  name: "Ivan",
  email: "ivan3@gmail.com",
  password: "123jkT",

  addLogin() {
    if (this.email.includes("@" && ".")) {
      console.log('Все прийнято');
    } else {
      console.log('Перевірте gmail');
    }

    if(this.password > 5) {
      console.log('Операція пройшла успішно');
    } else {
      console.log('щось пішло не так');
    }
  }
};
user.addLogin()

//* 4
//Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const movie = {
  title: "Madagascar",
  director: "Eric darnell",
  year: 2015,
  rating: 7,

  checkRaiting() {
    if (this.rating >= 8) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
};
movie.checkRaiting()

// const movie = {
//   title: "Madagascar",
//   director: "Eric darnell",
//   year: 2015,
//   rating: "",

//   checkRaiting(number) {
//     if (number >= 8) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   },
// };
// movie.checkRaiting(8);
