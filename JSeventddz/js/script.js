//* 1, 2
// Написати скрипт відкриття та закриття модального вікна по кнопці.
// Використовуючи попередній код написати скрипт закриття модального вікна по кліку на бекдроп

const btnOpen = document.querySelector('[data-action="open-modal"]');
const btnClose = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".js-backdrop");

console.log(btnClose);
console.log(btnOpen);
console.log(backdrop);

const toogleModal = () => {
  document.body.classList.toggle("show-modal");
};
btnOpen.addEventListener("click", toogleModal);
btnClose.addEventListener("click", toogleModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) {
    toogleModal();
  }
});

//* 3
// Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

const red = document.querySelector('[value="red"]');
const white = document.querySelector('[value="white"]');
const green = document.querySelector('[value="green"]');

console.log(red);
console.log(white);
console.log(green);

red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

white.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});

green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

//* 4
// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", () => {
  span.textContent = input.value.trim() !== "" ? input.value : "незнайомець";
});

//* 5
// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

const input2 = document.querySelector("#validation-input");
const dataLenght = parseInt(input2.getAttribute("data-length"));

input2.addEventListener("change", () => {
  let inputStr = input2.value
  // console.log(input2.value);
  // console.log(typeof(inputStr)); 
  console.log(inputStr.length);
  if (input2.value.length === dataLenght) {
    input2.classList.remove("invalid");
    input2.classList.add("valid");
  } else {
    input2.classList.remove("valid");
    input2.classList.add("invalid");
  }
});

//* 6
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});

// Встановити початковий розмір тексту на значення повзунка
text.style.fontSize = `${fontSizeControl.value}px`;
