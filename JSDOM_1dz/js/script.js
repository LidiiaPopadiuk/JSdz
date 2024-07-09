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

  const allItems = document.querySelectorAll('.item')
  for(let item of allItems) {
    const categoriesHeadItem = item.querySelector('#categories h2')
    const categoriesLength = item.querySelectorAll('ul li')
    console.log('Категорія:', categoriesHeadItem.textContent);
    console.log('Кількість елементів:', categoriesLength.length);
  }
};
getItem();




//2
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];
