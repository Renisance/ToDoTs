"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBtnDelete = createBtnDelete;
var index_js_1 = require("../services/index.js");
//Создание кнопки  "Удалить"
function createBtnDelete(li, arr) {
    var btnDelete = document.createElement('button');
    btnDelete.innerHTML = 'Удалить';
    btnDelete.classList.add('remove-btn');
    li.append(btnDelete);
    //Удаление Li
    btnDelete.addEventListener('click', function () {
        /////
        arr = arr.filter(function (item) { return item.id !== li.id; });
        (0, index_js_1.funcLocalStorage)(arr);
        /////
        return li.remove();
    });
}
;
