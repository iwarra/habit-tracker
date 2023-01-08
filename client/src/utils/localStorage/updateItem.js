export function updateItem(updated) {
  localStorage.setItem('habitList', JSON.stringify(updated))
}