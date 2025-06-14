// import {createBtnDelete} from "../components/delete.ts";
// import {editListItem} from "../components/edit.ts";
export { funcLocalStorage };
export interface ListItem {
    id: string;
    text: string;
}
import {createShowList} from "../components/createList.ts";
// export {funcLocalStorage}

export interface ListItem {
    id:  string;
    text:  string;
}

//Создаем массив для сохранения данных. Получаем данные по ключу "a", если данных нет, создаём пустой массив
let arr:ListItem[] =  JSON.parse(`${localStorage.getItem("a")}`)

// Просто "сохраняльщик" - каждый раз при изменении массива записывает его в хранилище.
const funcLocalStorage = (arr: ListItem[]): void => {    
    console.log(arr)
    localStorage.setItem('a', JSON.stringify(arr));
    
};

// Отображаем сохранённые элементы при загрузке
document.addEventListener("DOMContentLoaded", (): void => {   
      arr.map(item => createShowList(item, arr)); 
    });

document.querySelector('.btn-primary')!.addEventListener('click', () => {   
    const newItem: ListItem = {
        id: Math.random().toString(),
        text: (document.querySelector('.form-control') as HTMLInputElement).value
    };    
    arr.push(newItem); // Добавляем объект вместо строки
    funcLocalStorage(arr);
    createShowList(newItem, arr); // Передаём объект в функцию
    (document.querySelector('.form-control') as HTMLInputElement).value = ''; // Очищаем поле ввода
});
