'use strict'

// 1
// Напиши скрипт, який об'єднує всі елементи массива в один рядок.  Елементів може бути довільна кількість. Нехай елементи массива  в рядку будут розділені комою.
//  - Спочатку через for
//  - Потім через join()

const friends =['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for(let i = 0; i < friends.length; i++) {
    string += `${friends[i]} `
}
console.log(string);


string = friends.join(', ');
console.log(string);



//2
// Працюємо з колекцією карток в trello.  Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
 ];


//3
//   Видалити
// Видалення (по індексу), метод indexOf()

 const cardToRemove = 'Карточка-3';
 const indexToRemove = cards.indexOf(cardToRemove)
 if(indexToRemove !== -1) {
    cards.splice(indexToRemove, 1)
 }
 console.log(cards);

cards.splice(2, 1)
console.log(cards);



//4
//Додати
// Додавання (//!по індексу)

cards.push('Карточка-6')
console.log(cards);


//5

const cardToUpdate = 'Карточка-4'
const indexToUpdate = cards.indexOf(cardToUpdate)
if(indexToUpdate !== -1) {
    cards[indexToUpdate] = 'оновленно карт-4'
}
console.log(cards);
