import style from "./addNew.module.scss"
import Modal from "./Modal"
import StatsContext from "../../context/StatsContext"
import { addItem } from "../../utils/localStorage/addItem"
import { getAllItems } from "../../utils/localStorage/getAllItems"
import { IoMdAddCircle } from "react-icons/io"
import { useRef, useState, useContext } from "react"
import { createPortal } from "react-dom"
import { repetition } from "../../mongodb/habits"
import { serveDefault } from "../../utils/localStorage/serveDefault"

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
 
  const initial = useRef()
  const { setHabitsCount } = useContext(StatsContext)
  const storedCategories = getAllItems('Categories') 

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
          <label htmlFor="newHabit" className={style.labInp}>Add:
            <span className={style.firstInput}
              id="spanInput"
              contentEditable=""
              ref={initial}
              value={newHabit.name}
              onInput={() => setNewHabit(prev => ({
                        ...prev,
                        name: initial.current.innerHTML}))
                      }/>
          </label>
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
                              monthlyTotal: item.number,
                              }))}>
                            {item.name}
                          </li>)}
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
                    category: item.name}))}
                  >{item.name}</li>
                })}
              </ul>
              <div className={style.addCategory} onClick={handleAddCategory}>
                <IoMdAddCircle role="button" className={style.addIcon}/>
                <span>Add category</span>
                {isModalOpen && createPortal(<Modal setIsModalOpen={setIsModalOpen} />, document.body)}
              </div>
            </div>
          </div>
          <button className={style.btn}
            onClick={() => {
            addItem(newHabit, 'habitList')
            setHabitsCount(prev => prev + 1)
            document.getElementById('spanInput').focus()
            document.getElementById('spanInput').value = ''
            // initial.value = '' needs to reset on click
            }}
            >Create habit</button>
        </main>
      </div>
    </div>
  );
};

export default AddNew;
