'use strict'

//1
// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let array = [1, 2, 3]
array[1] = 10
console.log(array);


//2
// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let arrString =['Ukraine', 'is', 'the']
arrString.push('best')
console.log(arrString);


//3
// Створити скрипт який поверне суму всіх чисел в масиві.
let arrSum =[12, 32, 75, 23]
let sum = 0
for(let i = 0; i < arrSum.length; i++) {
    sum +=arrSum[i]
}
console.log(sum);


//4
// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let number = [1, 2, 3, 4, 5]
for(one of number) {
    console.log(one);
}


//5
// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
let arr = ['Hello', 'Chao', 'Welcome', 'Sorry', 'Ukraine']
for(world of arr) {
    if(world.length > 5) {
        console.log(world);
    } else {
        continue;
    }
}


//6
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
 let myArr = [5, 34, 67, 6, 2, 45, 65, 23, 62, 12]
 let maxNumber = 0;
 for(la of myArr) {
    if(la > maxNumber) {
        maxNumber = la
    }
 }
 console.log(maxNumber);


//7
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let numberPar =[12, 45, 23, 6, 8]
for(numb of numberPar) {
    if(numb % 2 !== 0) {
        continue
    }
    console.log(numb);
}

