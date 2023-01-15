import { addItem } from "../../utils/localStorage/addItem"
import { categories } from "../../mongodb/habits"
import { IoMdAddCircle } from "react-icons/io"
import style from "./addNew.module.scss"
import { useRef, useState } from "react"
import Modal from "./Modal"
import { createPortal } from "react-dom"

const AddNew = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newHabit, setNewHabit] = useState({
    name: '',
    checked: '',
    category: '',
    color: '',
    icon: '',
    repetition: '',
    monthlyTotal: '',
  })
  const initial = useRef()

  function handleAddCategory(event) {
    if (event.target.closest('#modalWrap')) return
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className={style.wrapper}>
      <div className={`${style.blue} ${style.circle}`}></div>
      <div className={`${style.pink} ${style.circle}`}></div>
      <div className={style.miniWrapper}>
        <header>
          <h1>Create New Habit</h1>
          <div className={style.labInp}> 
            <label htmlFor="newHabit">Add:</label>
            <span className={style.firstInput}
              contentEditable=""
              ref={initial}
              value={newHabit.name}
              onInput={() => {setNewHabit(initial.current.innerHTML)}}
            />
          </div>
        </header>
        <main>
          <p>Repetition</p>
          <div className={style.catWrapper}>
          <h3>Category</h3>
          <div className={style.categoryParent}>
            <ul className={style.categories}>
              {categories.map(item => {
                return <li style={{backgroundColor: item.color}} key={item.id}>{item.name}</li>
              })}
            </ul>
            <div className={style.addCategory} onClick={handleAddCategory}>
              <IoMdAddCircle role="button" className={style.addBtn}/>
              <span>Add category</span>
              {isModalOpen && createPortal(<Modal newHabit={newHabit} setNewHabit={setNewHabit} />, document.body)}
            </div>
          </div>
          </div>
          <button className={style.btn}
            /* onClick={() => {
            addItem(habitInput.current.value)
            habitInput.current.value = ''
            }} */
            >Create habit</button>
        </main>
      </div>
    </div>
  );
};

export default AddNew;
