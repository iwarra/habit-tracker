//Needs updating with new properties
function formatNewItem(newItem) {
  return {
    id: crypto.randomUUID(),
    name: newItem,
    checked: false,
  }
}


export {
  formatNewItem,
}