import { formatNewItem } from "../habitUtils";
import { getAllItems } from "./getAllItems";

export const addItem = (newItem) => {
    const prev = getAllItems(selector)
    localStorage.setItem(selector, JSON.stringify([...prev, formatNewItem(newItem)]))
};
