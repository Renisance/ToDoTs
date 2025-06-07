"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcLocalStorage = void 0;
var createList_js_1 = require("../components/createList.js");
//Создаем массив для сохранения данных. Получаем данные по ключу "a", если данных нет, создаём пустой массив
var arr = JSON.parse("".concat(localStorage.getItem("a")));
// Просто "сохраняльщик" - каждый раз при изменении массива записывает его в хранилище.
var funcLocalStorage = function (arr) {
    console.log(arr);
    localStorage.setItem('a', JSON.stringify(arr));
};
exports.funcLocalStorage = funcLocalStorage;
// Отображаем сохранённые элементы при загрузке
document.addEventListener("DOMContentLoaded", function () {
    arr.map(function (item) { return (0, createList_js_1.createShowList)(item, arr); });
});
document.querySelector('.btn-primary').addEventListener('click', function () {
    var newItem = {
        id: Math.random().toString(),
        text: document.querySelector('.form-control').value
    };
    arr.push(newItem); // Добавляем объект вместо строки
    funcLocalStorage(arr);
    (0, createList_js_1.createShowList)(newItem, arr); // Передаём объект в функцию
    document.querySelector('.form-control').value = ''; // Очищаем поле ввода
});
