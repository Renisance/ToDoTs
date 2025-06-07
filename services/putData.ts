import {postData} from "./postData.js";
// http://localhost:3000/task/${comletedItem.id}
function putData(url:string, data:string): void {
    fetch(url, {
        method: 'PUT',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        },
        body: data
    })
}

export {putData}