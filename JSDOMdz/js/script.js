'use strict'

//* 1
// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.
const btn = document.querySelector('.btn')
const text = document.querySelector('.title')
btn.textContent = text.textContent


//* 2
//Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
const img = document.querySelector('.kyiv')
img.width = 300
img.height = 200
img.addEventListener("click", () => {
    img.src = 'https://oceanmanswim.com/wp-content/uploads/2022/04/desktop_kyiv_23l.jpg'
})


//* 3
//Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.
const peli = document.querySelector('.peli')
peli.width = 400
peli.height = 300
peli.alt = 'skrydg'
const image = document.querySelector('.image')
image.href = 'https://www.google.com/search?q=%D1%81%D0%BA%D1%80%D1%83%D0%B4%D0%B6&sca_esv=3417c9dc8c4b50ab&rlz=1C1GCEA_enUA1065UA1065&udm=2&biw=1018&bih=730&sxsrf=ADLYWIITpr2z_vz269kslp32TcL3mlxpkQ%3A1720174561905&ei=4ceHZrjsNtyI7NYP7Iu9uAI&ved=0ahUKEwj44NrN1Y-HAxVcBNsEHexFDycQ4dUDCBA&uact=5&oq=%D1%81%D0%BA%D1%80%D1%83%D0%B4%D0%B6&gs_lp=Egxnd3Mtd2l6LXNlcnAiDNGB0LrRgNGD0LTQtjIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIsTFQrB5Yuy1wAXgAkAEAmAGJAaABogSqAQM1LjG4AQPIAQD4AQGYAgegArkEqAIKwgIHECMYJxjqAsICBBAjGCfCAgQQABgDwgILEAAYgAQYsQMYgwGYAwWSBwM2LjGgB9Io&sclient=gws-wiz-serp#vhid=yw54tMRL6UGfsM&vssid=mosaic'

//* 4
//Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.
const li = document.querySelector('.list')
const firstElem = li.firstElementChild
firstElem.textContent = 'Привіт'