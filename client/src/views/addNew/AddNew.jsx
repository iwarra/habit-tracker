import { addItem } from "../../utils/localStorage/addItem"
import { categories } from "../../mongodb/habits"
import { IoMdAddCircle } from "react-icons/io"
import style from "./addNew.module.scss"
import { useRef, useState, useContext } from "react"
import Modal from "./Modal"
import { createPortal } from "react-dom"
import FooterContext from "../../context/FooterContext.jsx"

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

  const { setPage } = useContext(FooterContext)
  setPage(prev => prev = "addHabit")
  
  function handleAddCategory(event) {
    if (event.target != 'button' && event.target.closest('#modalWrap')) return
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
              onInput={() => setNewHabit(prev => ({
                        ...prev,
                        name: initial.current.innerHTML}))
                      }/>
          </div>
        </header>
        <main>
          <label htmlFor="frequency">
            <select id="frequency" required>
              <option value="">How often will you do this habit?</option>
              <option value="daily">Daily</option>
              <option value="workDays">Only on work days</option>
              <option value="onWeekends">Only on weekends</option>
              <optgroup label='Weekly'>
                <option value="">on Mondays</option>
                <option value="">on Tuesdays</option>
                <option value="">on Wednesdays</option>
                <option value="">on Thursdays</option>
                <option value="">on Fridays</option>
                <option value="">on Saturdays</option>
                <option value="">on Sundays</option>
              </optgroup>
              <option value="">Custom</option>
            </select>
          </label>
          <div className={style.catWrapper}>
          <h3>Category</h3>
          <div className={style.categoryParent}>
            <ul className={style.categories}>
              {categories.map(item => {
                return <li style={{backgroundColor: item.color, cursor: 'pointer'}} 
                key={item.id}
                onClick={() => setNewHabit(prev => ({ 
                  ...prev,
                  category: item.name}))}
                >{item.name}</li>
              })}
            </ul>
            <div className={style.addCategory} onClick={handleAddCategory}>
              <IoMdAddCircle role="button" className={style.addBtn}/>
              <span>Add category</span>
              {isModalOpen && createPortal(<Modal setIsModalOpen={setIsModalOpen} />, document.body)}
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
