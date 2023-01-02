import styled from "styled-components";
import { BsPlusSquare } from 'react-icons/bs';
import { useRef } from "react";


const AddHabitTag = styled.div`
  display: flex;
  gap: .3em;
  justify-content: space-between; `

const AddHabit = ( {addItem} ) => {
  const habitInput = useRef()

  return (
           <AddHabitTag>
             <label htmlFor="newHabbit"></label>
             <input id="newHabbit" type="text" required placeholder="Add new habit..."
                ref= {habitInput} />
             <BsPlusSquare role="button"
              onClick={() => {
                addItem(habitInput.current.value)
                habitInput.current.value = ''
                }} />
           </AddHabitTag>);
};

export default AddHabit;
