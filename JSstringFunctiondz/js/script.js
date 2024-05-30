"use strict";

//* 1
//Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

let message = confirm("Хочете повідомлення?");
if (message === true) {
  alert("Hello world");
} else {
  alert("Sorry but you don't want message");
}


//* 2
// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2

const randNumberFn = (callback) => {
  const max = 100;
  const min = 1;
  const randomNumber = Math.random() * (max - min) + min;
  const randomNumberAnswer = +prompt('Вгадайте число від 1 до 100', '')

  if(randomNumberAnswer > 100) {
   return alert('загадане число є меньше 100')
  
  }
  if(randomNumber === randomNumberAnswer) {
    return alert('Молодець, все вірно!');
  } else {
    return alert(`Спробуй ще раз! Правильна відповідь: ${Math.round(randomNumber)}`);
  }
  callback(randomNumber)
};
const showNumber = (result) => {
    return alert(result);
}
randNumberFn()

//! 3
//Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.

//* *4
//Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.

let arr = [1, 2, 3, 4, 5]
const squareArray = (array, callback) => {
   let newArr = [];
  //  for(let i = 0; i < array.length; i++) {
  //   newArr.push(array[i] * array[i])
  //  }
  for(let num of array) {
    newArr.push(callback(num))
  }
   return newArr
}
const squereCallback = (num) => {
  return num * num
}

console.log(squareArray(arr,squereCallback));



// const applyCallbackToEachElement = (arr, callback) => {
// }
// const arr = [1, 2, 3, 4, 5]
// const squereCallback = ;
// const result = applyCallbackToEachElement(arr, squereCallback);
// console.log(result);//1 4 9 16 25

//* 5
//Розрахунок дисконтної ціни
//Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const calculareDiscountedPrice = (price, discount, callback) => {
  let discountedPrice = (price * (100 - discount)) / 100;
  callback(discountedPrice);
};

const showdiscountedPrice = (result) => {
  console.log(result);
};

calculareDiscountedPrice(100, 10, showdiscountedPrice); // 90
calculareDiscountedPrice(250, 20, showdiscountedPrice); //200
