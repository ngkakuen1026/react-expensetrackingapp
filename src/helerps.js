// Local Storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

// delete
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key);
}