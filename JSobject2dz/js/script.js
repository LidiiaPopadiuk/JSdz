"use strict";

//7
//Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const id = this.transactions.length
    return {id, type, amount}
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
    this.transactions.push(transaction)
    this.balance += amount
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if(this.balance < amount) {
      console.log('Недостатньо коштів');
    } 
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
    this.transactions.push(transaction)
    this.balance -= amount
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(item => item.id === id)
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    return this.transactions.filter(item => item.type === type)
  },
};

account.deposit(500)
console.log(account.getBalance());

account.deposit(1000)
console.log(account.getBalance());

account.withdraw(200)
console.log(account.getBalance());

account.withdraw(600)
console.log(account.getBalance());


console.log(account.transactions);

console.log(account.getTransactionDetails(3));

// деструктуризація об'єктів 1-6 з перебору об'єктів

// 1
const user = {
  name: "ivan",
  hobby: "reading",
  premium: true,
  mood: "happy",
};

const { name, hobby, premium, mood } = user;
console.log(name);
console.log(hobby);
console.log(premium);
console.log(mood);

//2
const randomObj = {
  name: "something",
  age: 20,
  premium: true,
  online: false,
};
const { name: name2, age, premium: premium2, online } = randomObj;
console.log(name2);
console.log(age);
console.log(premium2);
console.log(online);

//3
const findBestEmployee = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
const { lux, david, kiwi, chelsy } = findBestEmployee;
console.log(lux);
console.log(david);
console.log(kiwi);
console.log(chelsy);

//4
const countTotalSalary = {
  kiwi: 200,
  lux: 50,
  chelsy: 150,
};
const { kiwi: kiwi2, lux: lux2, chelsy: chelsy2 } = countTotalSalary;
console.log(kiwi2);
console.log(lux2);
console.log(chelsy2);

//5 i 6
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];
 
const [
  item1, item2, item3, item4,
] = products
console.log(item1);
const {name: name1, price: price1, quantity: quantity1} = item1
console.log(name1);
console.log(price1);
