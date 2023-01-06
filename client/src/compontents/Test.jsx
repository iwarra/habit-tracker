import { addItem } from "../utils/localStorage/addItem";
import { deleteItem } from "../utils/localStorage/deleteItem";
import { formatNewItem } from "../utils/habitUtils";

function Button({onAdd}) {

/*   function handleAdd(newItem) {
    onChange((prev => {
      addItem(prev, newItem)
      return [...prev, formatNewItem(newItem)]
    }))
  } */

  function handleDelete(id) {
    onChange(prev => {
      deleteItem(id, prev.filter(item => item.id !== id))
      return prev.filter(item => item.id !== id)
  })
  }

  return <button onClick={() => handleDelete('c376a5fd-f892-4aa5-8409-45a452246f3e')} >Test Button</button>

}

export default Button;
