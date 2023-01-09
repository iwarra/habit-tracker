import { addItem } from "../../utils/localStorage/addItem";
import { deleteItem } from "../../utils/localStorage/deleteItem";

function Button() {


  return (
    <>
    <button onClick={() => addItem('Drink water')} >Add Habit</button>
    <button onClick={() => deleteItem('a6310be1-f2a1-4e08-9d60-cc5c7bdf7798')}>Delete Habit</button>
    </>
    )
}

export default Button;
