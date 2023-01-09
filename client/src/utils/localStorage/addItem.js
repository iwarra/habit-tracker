import { formatNewItem } from "../habitUtils";
import { getAllItems } from "./getAllItems";

export const addItem = (newItem) => {
    const prev = getAllItems()
    localStorage.setItem('habitList', JSON.stringify([...prev, formatNewItem(newItem)]))
};
