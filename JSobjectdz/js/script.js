"use strict";

//1
//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "Ivan",
  accountNumber: 108498274,
  balance: 100000,

  deposit() {},
};

//2
//Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
  temperature: "",
  humidity: "40%",
  windSpeed: "2km/h",

  resultTemperature(temp) {
    if (temp <= 0) {
      console.log("температура < 0 градусів Цельсія");
    } else {
      console.log("температура > 0 градусів Цельсія");
    }
  },
  this.temperature = temp
};
weather.resultTemperature(5)


//3
//Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
    name: 'Ivan',
    email: 'ivan3@gmail.com',
    password: '123jkT',

    addLogin() {
        if(this.email.includes('@' && '.')) {

        }
    }
}


//4
//Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const movie = {
    title: 'Madagascar',
    director: 'Eric darnell',
    year: 2015,
    rating: '9/10'
}