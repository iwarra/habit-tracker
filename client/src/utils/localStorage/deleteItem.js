export const deleteItem = (id, filtered) => {
  localStorage.setItem('habitList', JSON.stringify(filtered))
} 