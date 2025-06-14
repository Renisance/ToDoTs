// import {postData} from "../services/postData.ts";
// `http://localhost:3000/task/${deleteItem.id}
function deleteData(url:string): void {
    fetch(url, {
        method: 'DELETE',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        }
        });
}
export {deleteData}