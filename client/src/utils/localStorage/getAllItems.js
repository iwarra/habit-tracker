export function getAllItems(selector) {
  return JSON.parse(localStorage.getItem(selector))
}