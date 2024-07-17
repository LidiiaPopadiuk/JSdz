"use strict";
//*  1
// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

const getItem = () => {
  const categoriesTotal = document.querySelectorAll("#categories ul");
  //    console.log('Кількість категорій', categoriesTotal.length);
  console.log(`У вас вийде ${categoriesTotal.length} категорій`);

  const allItems = document.querySelectorAll(".item");
  for (let item of allItems) {
    const categoriesHeadItem = item.querySelector("#categories h2");
    const categoriesLength = item.querySelectorAll("ul li");
    console.log("Категорія:", categoriesHeadItem.textContent);
    console.log("Кількість елементів:", categoriesLength.length);
  }
};
getItem();

//* 2
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const allIngredients = document.querySelector("#ingredients");
const addIngredient = ingredients.map((option) => {
  const li = document.createElement("li");
  li.textContent = option;
  allIngredients.appendChild(li);
});
console.log(addIngredient);

//* 3
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().
// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryContainer = document.querySelector("#gallery");
const galleryItems = images.map((image) => {
  return `<li class='galletyItem'>
  <img src='${image.url}' alt='${image.alt}'/></li>`;
});
galleryContainer.insertAdjacentHTML('beforeend', galleryItems);

//* 4
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

let counterValue = 0;

const incr = document.querySelector('[data-action="decrement"]');
const decr = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");

const increment = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};
incr.addEventListener("click", increment);

const decrement = () => {
  counterValue += 1;
  span.textContent = counterValue;
};
decr.addEventListener("click", decrement);
