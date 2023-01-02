function formatNewItem(newItem) {
  return {
    id: crypto.randomUUID(),
    habit: newItem,
    checked: false,
  }
}


export {
  formatNewItem,
}