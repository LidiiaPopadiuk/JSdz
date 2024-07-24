'use strict'

//* 1
// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)
// const picture =  document.querySelector('.gallery')

document.addEventListener('keydown', function(event) {
    const gallery = document.querySelector('.gallery');
    if (event.key === 'ArrowRight') {
      gallery.scrollBy({ left: 320, behavior: 'smooth' });
    } else if (event.key === 'ArrowLeft') {
      gallery.scrollBy({ left: -320, behavior: 'smooth' });
    }
  });

//2
//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

const boxes = document.querySelector('#boxes')
const btnAdd = document.querySelector('[data-action="render"]')
const btnRemove = document.querySelector('[data-action="destroy"]')
const input = document.querySelector('[type="number"]')

const destroyBoxes = () => {
  boxes.innerHTML = '';
}

btnRemove.addEventListener('click', destroyBoxes)


const createBoxes = (amount) => {
  let size = 30
   for (let i = 0; i < amount; i++) {
    let div = document.createElement('div') 
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    boxes.appendChild(div)
    size += 10
   } 
}

btnAdd.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
})




