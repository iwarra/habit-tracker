import { formatNewItem } from "../habitUtils";

export const addItem = (prev, newItem) => {
    localStorage.setItem('habitList', JSON.stringify([...prev, formatNewItem(newItem)]))
};
