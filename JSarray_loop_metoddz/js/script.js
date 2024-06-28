'use strict'

//* 7
// Отримати загальну суму балансу (поле balance) всіх користувачів.
const users = [
    {name: 'Ivan', balance: 100, friend: 'Briana Decker', skills: 'jump'},
    {name: 'Peter', balance: 200, friend: 'Goldie Gentry', skills: 'run'},
    {name: 'Misha', balance: 300, friend: 'Sharlene Bush', skills: 'wash'},
]
const calculateTotalBalance = users => {
    return users.reduce((acc, user) => acc + user.balance, 0)
  };
console.log(calculateTotalBalance(users)); 



//* 8
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const getUsersWithFriend = (users, friendName) => {
    return users.find(user2 => user2.friend === friendName)
  };
  
console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry')); 



//* 9
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
const users3 = [
  {name: 'Ivan', balance: 100, friend: 'Briana Decker', skills: 'jump', friends: 5},
  {name: 'Peter', balance: 200, friend: 'Goldie Gentry', skills: 'run', friends: 3},
  {name: 'Misha', balance: 300, friend: 'Sharlene Bush', skills: 'wash', friends: 6},
]
const getNamesSortedByFriendsCount = users => {
    return users3.sort((a, b) => a.friends - b.friends)
  };
  
  console.log(getNamesSortedByFriendsCount(users3));



//*л 10
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
// const users2 = [
//   {name: 'Ivan', balance: 100, friend: 'Briana Decker', skills: 'jump'},
//   {name: 'Peter', balance: 200, friend: 'Goldie Gentry', skills: 'run'},
//   {name: 'Misha', balance: 300, friend: 'Sharlene Bush', skills: 'run'},
// ]

  const users2 = [
    { skills: ['lorem', 'ipsum', 'dolor'] },
    { skills: ['ipsum', 'dolor', 'sit', 'amet'] },
    { skills: ['consectetur', 'adipisicing', 'elit'] },
    ];

  // const getSortedUniqueSkills = users => {
  //   return users2.sort((a, b) => a.skills.localeCompare(b.skills))
  // }

  const getSortedUniqueSkills = users => {
      const allSkills = users.reduce((acc, user) => acc.concat(user.skills), [])
      const uniqSkills = allSkills.filter((skill, index, self) => {
        return self.indexOf(skill) === index
      })
      const sorted = uniqSkills.sort()
      return sorted
    };
    
    console.log(getSortedUniqueSkills(users2));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]