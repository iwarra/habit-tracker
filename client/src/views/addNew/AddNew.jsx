import { useContext, useState } from "react"
import { createPortal } from "react-dom"
import { IoMdAddCircle } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import StatsContext from "../../context/StatsContext"
import ValidationContext from "../../context/ValidationContext"
import { repetition } from "../../mongodb/habits"
import { addItem } from "../../utils/localStorage/addItem"
import { getAllItems } from "../../utils/localStorage/getAllItems"
import { serveDefault } from "../../utils/localStorage/serveDefault"
import style from "./addNew.module.scss"
import Modal from "./Modal"

serveDefault('Categories')

const AddNew = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newHabit, setNewHabit] = useState({
    id: crypto.randomUUID(),
    name: '',
    checked: false,
    category: '',
    color: '',
    icon: '',
    repetition: '',
    monthlyTotal: '',
  })

  const { setHabitsCount } = useContext(StatsContext)
  const { inputValidation, isVisible, setIsVisible } = useContext(ValidationContext)
  const storedCategories = getAllItems('Categories') 
  const navigate = useNavigate();

  function handleAddCategory(event) {
    if (event.target != 'button' && event.target.closest('#modalWrap')) return
    setIsModalOpen(prev => !prev)
  }

  function handleAddHabit() {
    if (inputValidation(newHabit.name, 'habitVis')) return
    addItem(newHabit, 'habitList')
    setHabitsCount(prev => prev + 1)
    setIsVisible(prev => ({...prev, habitVis: false}))
    navigate("/") 
  }

  return (
    <div className={style.wrapper}>
      <div className={`${style.blue} ${style.circle}`}></div>
      <div className={`${style.pink} ${style.circle}`}></div>
      <div className={style.miniWrapper}>
        <header>
          <h1>Create New Habit</h1>
          <label htmlFor="newHabit" className={style.labInp}>Add:
            <input className={style.firstInput}
              id="habitInput"
              type="text"
              required
              value={newHabit.name}
              onChange={(e) => setNewHabit(prev => ({...prev, name: e.target.value}))
              }
            />
          </label>
           <div>
            { isVisible.habitVis ? <span className={style.errorMessage}>Please enter a new habit</span> : '' }
            </div>
        </header>
        <main>
          <div className={style.frequency}> 
            <h2>Frequency</h2>
              <ul className={style.freqUl}>
                {repetition.map(item => <li key={item.id} 
                  className={style.freqLi} 
                  onClick={() => setNewHabit(prev => ({
                              ...prev,
                              repetition: item.name,
                              monthlyTotal: item.number}))}> {item.name} </li>)}
              </ul>
          </div>
          <div className={style.catWrapper}>
            <h2>Category</h2>
            <div className={style.categoryParent}>
              <ul className={style.categories}>
                {storedCategories.map(item => {
                  return <li style={{backgroundColor: item.color, cursor: 'pointer'}} 
                  key={item.id}
                  onClick={() => setNewHabit(prev => ({ 
                    ...prev,
                    category: item.name,
                    color: item.color,
                    icon: item.icon}))}> {item.name} </li>
                })}
              </ul>
              <div className={style.addCategory} onClick={handleAddCategory}>
                <IoMdAddCircle role="button" className={style.addIcon}/>
                <span>Add category</span>
                {isModalOpen && createPortal(<Modal setIsModalOpen={setIsModalOpen} />, document.body)}
              </div>
            </div>
          </div>
          <button className={style.btn} onClick={handleAddHabit}>Create habit</button>
        </main>
      </div>
    </div>
  );
};

export default AddNew;
