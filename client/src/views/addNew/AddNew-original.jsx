import { addItem } from "../../utils/localStorage/addItem"
import { categories } from "../../mongodb/habits"
import { IoMdAddCircle } from "react-icons/io"
import style from "./addNew.module.scss"
import { useRef, useState } from "react"

const AddNew = () => {
  const [newHabit, setNewHabit] = useState()
  const initial = useRef()

  return (
    <div className={style.wrapper}>
      <header>
        <h1>Create New Habit</h1>
        <div className={style.labInp}> 
          <label htmlFor="newHabit">Add:</label>
          <span className={style.firstInput}
            contentEditable=""
            ref={initial}
            value={newHabit}
            onInput={() => {setNewHabit(initial.current.innerHTML)}}
          />
        </div>
      </header>
      <main>
        <span>Color?</span>
        <p>Icon ?</p>
        <p>Repetition</p>
        <h3>Category</h3>
        <div className={style.categoryParent}>
          <ul className={style.categories}>
            {categories.map(item => {
              return <li style={{backgroundColor: item.color}} key={item.id}>{item.name}</li>
            })}
          </ul>
          <div className={style.addCategory}>
            <IoMdAddCircle role="button" className={style.addBtn}/>
            <span>Add category</span>
          </div>
        </div>
      </main>
      <button className={style.btn}
        onClick={() => {
        addItem(habitInput.current.value)
        habitInput.current.value = ''
        }}>Create habit</button>
    </div>
  );
};

export default AddNew;
