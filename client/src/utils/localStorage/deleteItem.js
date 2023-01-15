import { getAllItems } from "./getAllItems"

export const deleteItem = (id, selector) => {
  const filtered = getAllItems(selector).filter(item => item.id !== id)
  localStorage.setItem(selector, JSON.stringify(filtered))
} 