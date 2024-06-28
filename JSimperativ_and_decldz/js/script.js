"use strict";

//* 1
// Отримати масив імен всіх користувачів (поле name).
const names = [
  { username: "Moore Hensley" },
  { username: "Sharlene Bush" },
  { username: "Ross Vazquez" },
  { username: "Elma Head" },
  { username: "Carey Barr" },
];
const getNames = names.map((username) => username.username);
console.log(getNames);
// [
//   'Moore Hensley',
//   'Sharlene Bush',
//   'Ross Vazquez',
//   'Elma Head',
//   'Carey Barr'
// ]

//* 2
//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const users = [
  { username: "Moore Hensley", color: "green" },
  { username: "Sharlene Bush", color: "blue" },
  { username: "Ross Vazquez", color: "brown" },
  { username: "Elma Head", color: "blue" },
];

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.color === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [
//   { username: 'Sharlene Bush', color: 'blue' },
//   { username: 'Elma Head', color: 'blue' }
// ]

//* 3
//Отримати масив імен користувачів за статтю (поле gender).
const user = [
  {
    username: "Moore Hensley",
    gender: "male",
    isActive: true,
    email: "moorehensley@gmail.com",
    age: 37,
    balance: 2500,
  },
  {
    username: "Sharlene Bush",
    gender: "male",
    isActive: true,
    age: 35,
    balance: 2000,
  },
  {
    username: "Ross Vazquez",
    gender: "female",
    isActive: false,
    age: 22,
    balance: 3000,
  },
  {
    username: "Elma Head",
    gender: "female",
    isActive: false,
    email: "elmahead@omatom.com",
    age: 25,
    balance: 2000,
  },
];
const getUsersWithGender = (users, gender) => {
  return user.filter((user) => user.gender === gender);
};

// console.log(getUsersWithGender(user, "male"));

//* 4
//Отримати масив тільки неактивних користувачів (поле isActive).
const getInactiveUsers = (users) => {
  return user.filter((user) => user.isActive === false);
};

// console.log(getInactiveUsers(user));

//* 5
//Отримати користувача (не масив) по email (поле email, він унікальний).
const getUserWithEmail = (users, email) => {
  return user.filter((user) => user.email === email);
};

// console.log(getUserWithEmail(user, "elmahead@omatom.com"));

//* 6
//Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).
const getUsersWithAge = (users, min, max) => {
  return user.filter((user) => user.age >= min && user.age <= max);
};

// console.log(getUsersWithAge(user, 20, 30));
// console.log(getUsersWithAge(user, 30, 40));

//* 7
//Отримати загальну суму балансу (поле balance) всіх користувачів.
const calculateTotalBalance = (users) => {
  const userBalance = users.reduce((acc, user) => acc + user.balance, 0);
  return userBalance;
};
console.log(calculateTotalBalance(user)); //9500

//* 8
//Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const user2 = [
  {
    username: "Moore Hensley",
    gender: "male",
    isActive: true,
    email: "moorehensley@gmail.com",
    age: 37,
    balance: 2500,
    friend: "Ross Vazquez",
  },
  {
    username: "Sharlene Bush",
    gender: "male",
    isActive: true,
    age: 35,
    balance: 2000,
    friend: "Briana Decker",
  },
  {
    username: "Ross Vazquez",
    gender: "female",
    isActive: false,
    age: 22,
    balance: 3000,
    friend: "Sheree Anthony",
  },
  {
    username: "Elma Head",
    gender: "female",
    isActive: false,
    email: "elmahead@omatom.com",
    age: 25,
    balance: 2000,
    friend: "Goldie Gentry",
  },
];
const getUsersWithFriend = (users, friendName) => {
  return user2.filter(user => user.friend === friendName)
};

console.log(getUsersWithFriend(user2, "Briana Decker"));
console.log(getUsersWithFriend(user2, "Goldie Gentry")); 


//* 9
//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
const getNamesSortedByFriendsCount = (users) => {
  return user2.map(user => user.friend)
};

console.log(getNamesSortedByFriendsCount(user2));
//[ 'Ross Vazquez', 'Briana Decker', 'Sheree Anthony', 'Goldie Gentry' ]


