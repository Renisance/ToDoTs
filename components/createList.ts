export {createShowList}
import {editListItem} from "./edit";
import {createBtnDelete} from "./delete";
import {ListItem} from "../services/index";



function createShowList(item: ListItem, arr: ListItem[]): HTMLElement {
    let list: HTMLElement = document.createElement('li');
    /////////
    list.setAttribute('id', item.id);
    list.textContent = item.text;
    ////////
    (document.querySelector('.form-control') as HTMLInputElement).value = '';
    (document.querySelector('.form__list') as HTMLInputElement).append(list);
    // const listAppend: HTMLElement || null = document.querySelector('.form__list').append(list);
    // const listValue: HTMLElement || null = document.querySelector('.form-control').value
    createBtnDelete(list, arr)
    editListItem(list, arr, item)
    return list;
};