"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShowList = createShowList;
var edit_js_1 = require("./edit.js");
var delete_js_1 = require("./delete.js");
function createShowList(item, arr) {
    var list = document.createElement('li');
    /////////
    list.setAttribute('id', item.id);
    list.textContent = item.text;
    ////////
    document.querySelector('.form-control').value = '';
    document.querySelector('.form__list').append(list);
    // const listAppend: HTMLElement || null = document.querySelector('.form__list').append(list);
    // const listValue: HTMLElement || null = document.querySelector('.form-control').value
    (0, delete_js_1.createBtnDelete)(list, arr);
    (0, edit_js_1.editListItem)(list, arr, item);
    return list;
}
;
