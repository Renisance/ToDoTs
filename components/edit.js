"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editListItem = editListItem;
var index_js_1 = require("../services/index.js");
var delete_js_1 = require("./delete.js");
//Создание кнопки "Редактировать"
function editListItem(li, arr, item) {
    var btnEdit = document.createElement('button');
    btnEdit.innerHTML = 'Редактировать';
    btnEdit.classList.add('edit-btn');
    li.append(btnEdit);
    // Редактирование Li
    btnEdit.addEventListener('click', function () {
        btnEdit.remove();
        var inputEditItem = document.createElement('input');
        inputEditItem.value = item.text;
        inputEditItem.classList.add('edit-input');
        li.append(inputEditItem);
        // Создание кнопки инпута
        var inputBtn = document.createElement('button');
        inputBtn.classList.add('inp-btn');
        inputBtn.innerHTML = 'Готово';
        li.append(inputBtn);
        inputBtn.addEventListener('click', function () {
            ///
            var newText = inputEditItem.value;
            li.textContent = newText;
            var index = arr.findIndex(function (item) { return item.id === li.id; });
            if (index !== -1) {
                arr[index].text = newText;
                (0, index_js_1.funcLocalStorage)(arr);
            }
            inputEditItem.remove();
            inputBtn.remove();
            editListItem(li, arr, item);
            (0, delete_js_1.createBtnDelete)(li, arr);
        });
    });
}
;
