import { createPortal } from 'react-dom'
import { IoMdAddCircle } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { useAddNew } from '../hooks/useAddNew'
import { repetition } from '../mongodb/habits'
import { serveDefault } from '../utils/localStorage/serveDefault'
import { categoriesToShow } from '../utils/localStorage/showAllCategories'
import { useContext } from 'react'
import ModalContext from '../context/ModalContext'
import style from './addNew.module.scss'
import Modal from './Modal'

serveDefault('Categories')

const AddNew = () => {
  const { newHabit, setNewHabit, handleAddCategory, handleAddHabit } = useAddNew()
  const { isModalOpen } = useContext(ModalContext)
  const { register, formState, handleSubmit } = useForm()
  const { errors } = formState

  return (
    <div className={style.wrapper}>
      <div className={`${style.blue} ${style.circle}`}></div>
      <div className={`${style.pink} ${style.circle}`}></div>
      <div className={style.miniWrapper}>
        <header>
          <h1>Create New Habit</h1>
          <label htmlFor="newHabit" className={style.labInp}>
            Add:
            <input
              className={style.firstInput}
              {...register('habit', {
                name: 'habit',
                required: 'Please enter a new habit',
                onChange: (e) => setNewHabit((prev) => ({ ...prev, name: e.target.value })),
                type: 'text',
              })}
              id="newHabit"
              value={newHabit.name}
            />
          </label>
          <span className={style.errorMessage}>{errors.habit?.message}</span>
        </header>
        <main>
          <div className={style.frequency}>
            <h2>Frequency</h2>
            <ul className={style.freqUl}>
              {repetition.map((item) => (
                <li
                  key={item.id}
                  className={style.freqLi}
                  onClick={() =>
                    setNewHabit((prev) => ({
                      ...prev,
                      repetition: item.name,
                      monthlyTotal: item.number,
                    }))
                  }
                >
                  {' '}
                  {item.name}{' '}
                </li>
              ))}
            </ul>
          </div>
          <div className={style.catWrapper}>
            <h2>Category</h2>
            <div className={style.categoryParent}>
              <ul className={style.categories}>
                {categoriesToShow().map((item) => {
                  return (
                    <li
                      style={{ backgroundColor: item.color, cursor: 'pointer' }}
                      key={item.id}
                      onClick={() =>
                        setNewHabit((prev) => ({
                          ...prev,
                          category: item.name,
                          color: item.color,
                          icon: item.icon,
                        }))
                      }
                    >
                      {' '}
                      {item.name}{' '}
                    </li>
                  )
                })}
              </ul>
              <div className={style.addCategory} onClick={handleAddCategory}>
                <IoMdAddCircle role="button" className={style.addIcon} />
                <span>Add category</span>
                {isModalOpen && createPortal(<Modal />, document.body)}
              </div>
            </div>
          </div>
          <button className={style.btn} onClick={handleSubmit(handleAddHabit)}>
            Create habit
          </button>
        </main>
      </div>
    </div>
  )
}

export default AddNew
