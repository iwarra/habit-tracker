//Needs updating with new properties once user input is added for new habits
function formatNewItem(newItem) {
  return {
    id: crypto.randomUUID(),
    name: newItem,
    checked: false,
    category: '',
    color: '',
    icon: '',
    repetition: '',
    monthlyTotal: '',
  }
}

export {
  formatNewItem,
}