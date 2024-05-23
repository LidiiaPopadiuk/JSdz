"use sctrict";

//* Завдання 1

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function (array) {
  let sum;
  for (let i = 0; i < array.length; i++) {
    sum = `${i + 1} - ${array[i]}`;
    console.log(sum);
  }
  return sum
};

console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));


//* Завдання 2

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
  const array = message.split(" ");
  const lengthWord = array.length;
  const cost = lengthWord * pricePerWord;
  return cost;
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    2
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);


//* Завдання 3

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
  let arrStr = string.split(" ");
  let longestWord;
  let wordLength = 0;
  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;
    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];
      return longestWord;
    }
  }
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //"jumped"
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'



//* Завдання 4

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = (string) => {
    if(string.length <= 40) {
        console.log(string);
    } else {
        console.log(string.slice(0, 39) + '...');
    }
    return string
}
const str = 'ieuhiuwhxnjhewi hlwijrherij erpfjnp ierhcn eri cch'
formatString(str)



//* Завдання 5

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
  let ckeck;
  let letter = message.toLowerCase();
  if (letter.includes("spam") || letter.includes("sale")) {
    check = "true";
  } else {
    check = "false";
  }
  return check;
};
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));



// *  Завдання 6

// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Ведіть число", "");
//   if (input !== null) {
//     const number = Number(input);
//     if(!Number.isNaN(number));
//   } else {
//     alert('Було введено не число, попробуйте ще раз');}
// } while (input !== null && input !== '');
 
// if(numbers.length > 0) {
//    for(const number of numbers) {
//     total += number
//    }
//    alert(`Загальна сума чисел доривнює: ${total}`);
// }



let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введіть число.');
  if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log(`Загальна сума чисел доривнює: ${total}`);