import { getAllItems } from "./getAllItems"

export const deleteItem = (id) => {
  const filtered = getAllItems().filter(item => item.id !== id)
  localStorage.setItem('habitList', JSON.stringify(filtered))
} 