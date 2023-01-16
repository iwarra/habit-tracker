import { getAllItems } from "./getAllItems";

export const addItem = (newItem, selector) => {
    const prev = getAllItems(selector)
    localStorage.setItem(selector, JSON.stringify([...prev, newItem]))
};
