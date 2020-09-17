"use strict"

alert("скрипт lesson подключен")

// Методы поиска по DOM-элементам - Получение ссылок на Теги, Стили, Контент, Классы, Атрибуты

// Устаревшие методы
let images=document.getElementsByTagName("img");
console.log(images);
console.log(images[0]);

let coffeeList=document.getElementsByClassName("coffee-item");
console.log(coffeeList);
console.log(coffeeList[0]);

let coffee=document.getElementById("coffee-machine");
console.log(coffee);

// Современные методы

let atm=document.querySelector(".atm-container"); // ищет один первый
console.log(atm);

let coffeeItem=document.querySelector(".coffee-item");
console.log(coffeeItem);

let coffeeNames=document.querySelectorAll("span"); // ищет все вхождения по коду - выдает массив
console.log(coffeeNames);

let exchB=document.querySelector(".btn");
console.log(exchB);

let kruzhkiPic=document.querySelectorAll(".coffee-item img");
console.log(kruzhkiPic);

let buttons=document.querySelectorAll(".coffee-item");
let cappuccinoButton=buttons[1];
console.log(cappuccinoButton);

// предыдущи query ищет только вниз

coffeeList=cappuccinoButton.parentElement; // получить родителя
console.log(coffeeList);
let nextCoffee=cappuccinoButton.nextElementSibling; // получить следующего соседа
console.log(nextCoffee);
let prevCoffee=cappuccinoButton.previousElementSibling; // получить предыдущего соседа
console.log(prevCoffee);
let childCoffee=cappuccinoButton.children; // получить массив детей
console.log(childCoffee);

let cappuccinoText=cappuccinoButton.querySelector("span");
console.log(cappuccinoText);

// Изменение элементов и их стилей - продолжение css-анимации

/*let bigCup=document.querySelector(".cup");
console.log(bigCup.style.width);
bigCup.style.width="300px";
console.log(bigCup.style.width);

bigCup.style.display="none";
bigCup.style.display=""; // Изначально объект не видит параметры заданные в .CSS и стартует со значением "" - как следствие Вернуть как было в .CSS

bigCup.style.transition="transform 5s";
setInterval(function() {
    bigCup.style.transform="rotate(180deg)";
}, 5000);

setTimeout(function() {
    bigCup.style.transform="rotate(180deg)";
}, 5000);

*/

// Изменение атрибутов

let bigCup=document.querySelector(".cup");
console.log(bigCup.hasAttribute("src"));

let cupSrc=bigCup.getAttribute("src");
console.log(cupSrc);

bigCup.setAttribute("src", "img/cappuccino.png");
// bigCup.removeAttribute("src");

// let strNewPic=document.querySelectorAll(".coffee-item img")[2].getAttribute("src");
let strNewPic=document.querySelector("[alt='Латтэ']").getAttribute("src");
console.log(strNewPic)

bigCup=document.querySelector(".cup").setAttribute("src", strNewPic);

// Изменение контента элемента - InnerHTML и обратные кавычки дабы вставить куски кода прямо в js

let displayText=document.querySelector(".display-text");
console.log(displayText.innerText);
displayText.innerText="Ваш <b>капучино</b> готовится";
displayText.innerHTML="Ваш <b>латтэ</b> готовится";

coffeeList=document.querySelector(".coffee-list");
for (let i=0;i<2; i++) {
    coffeeList.innerHTML=coffeeList.innerHTML +  `
            <div class="coffee-item">
                <img src="img/espresso.png" alt="Эспрессо">
                <span>Эспрессо - 61 руб.</span>
            </div>
    `;
}

// Изменение классов

let changeBtn=document.querySelector(".btn");
console.log(changeBtn.className);

console.log(changeBtn.classList); // Добавить класс
changeBtn.classList.add("p-3"); // Удалить класс
changeBtn.classList.remove("my-2"); // Проверить наличие эл-та в классе
console.log(changeBtn.classList.contains("btn")); //

// Планирование

setTimeout(function() {
    let coffeeOper=document.querySelector(".coffee-oper");
    coffeeOper.style.backgroundColor="red";
}, 3000);

setTimeout(function() {
    let coffeeOper=document.querySelector(".coffee-oper");
    coffeeOper.style.backgroundColor="";
}, 5000);

/*setInterval(function() {
    let coffeeDisplay=document.querySelector(".display");
    coffeeDisplay.classList.toggle("bg-danger");
}, 1000);

*/

let displayInterval=setInterval(function() {
    let coffeeDisplay=document.querySelector(".display");
    coffeeDisplay.classList.toggle("bg-danger");
}, 1000);

// Остановка функций setTimeout и setInterval - clearTimeout и clearInterval

setTimeout(function() {
    clearInterval(displayInterval);
}, 10000);


function changeDisplayText() {
    let display=document.querySelector(".display");
    display.innerHTML="ваш кофе готовится";
    display.innerHTML=display.innerHTML +  `
            <div class="coffee-item">
                <img src="img/espresso.png" alt="Эспрессо">
                <span>Эспрессо - 61 руб.</span>
            </div>
    `;
    
}

changeDisplayText; // Вызываем БЕЗ () непосредственно в коде или в Консоле - ничего не происходит

// ТРИ варианта описания функций для аСинхронных (параллельных) функций = функций КоллБэков в частности
// 1. описание как обычно - но вызов внутри колбэка БЕЗ ();
// 2. описание внутри вызова - синтаксис "функции обертки";
// 3. описать классически но вызвать все равно через обертку СССС ();

setTimeout(changeDisplayText, 5000);
setTimeout(function() {
    changeDisplayText();
}, 5000);



// Cлушатели событий - обращение к событиям через свойство=ON+...

/*click- нажатие левой клавиши мыши
mouseover- наведение мышью на элементе
mouseout- уводим курсор с элемента
mousedown- зажали левую кнопку мыши на элементе
mouseup- отпустили левую кнопку мыши

dblclick- двойное нажатие
contextmenu-  нажатие правой кнопкой мыши

focus- начинает ввод в инпут
change- пользователь что-то ввел в input
keydown- нажатие кнопки на клавиатуре
keyup- отжали кнопку

transitionend- событие окончания транзиции
submit- отправка формы
*/

// 1/ Вешаем событие с помощью атрибута HTML

/*<div onclick="showMessage()">Нажми на меня</div>
*/

// 2/ Вешаем событие через соответствующее свойство= ON+событие

changeBtn=document.querySelector(".btn");
changeBtn.onclick=function() {
    alert("Даем сдачу");
}

// 3/ Метод addEventListener(event,function)

// changeBtn=document.querySelector(".btn");
// changeBtn.addEventListener("click", function() {
//     alert("yt lftv");
// });

// Снимаем слушателя событий - работает попарно либо вкл/вык через свойство либо через событие - НЕ Миксовать

changeBtn.onclick=null;

/*changeBtn=document.querySelector(".btn");
function handler() {
    alert("Даем сдачу");
};

changeBtn.addEventListener("click", handler);
changeBtn.removeEventListener("click", handler);


*/

let changeCup=document.querySelector(".cup");
changeCup.onclick=function() {
    let disp=document.querySelector(".display");
    disp.style.backgroundColor="yellow";
    disp.classList.toggle("red"); // toggle включаетВыключает к объекту htmpl "стилевые" свойства
}

let coffeeButtons=document.querySelectorAll(".coffee-item");
for (let i=0; i<coffeeButtons.length; i++) {
    coffeeButtons[i].onclick=function() {
        console.log(this);
    }
}

