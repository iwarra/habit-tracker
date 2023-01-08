import { addItem } from "../../utils/localStorage/addItem";
import { deleteItem } from "../../utils/localStorage/deleteItem";
import { formatNewItem } from "../../utils/habitUtils";

function Button({onClick}) {

  function handleAdd(newItem) {
    onClick((prev => {
      addItem(prev, newItem)
      return [...prev, formatNewItem(newItem)]
    }))
  }

  function handleDelete(id) {
    onClick(prev => {
      deleteItem(id, prev.filter(item => item.id !== id))
      return prev.filter(item => item.id !== id)
  })
  }

  return (
    <>
    <button onClick={() => handleAdd('Drink water')} >Add Habit</button>
    <button onClick={() => handleDelete('fb78a160-ffec-40c9-a811-9eec23d4e129')}>Delete Habit</button>
    </>
    )
}

export default Button;
