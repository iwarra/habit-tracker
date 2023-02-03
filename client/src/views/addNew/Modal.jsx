import { useState, useContext } from "react"
import { useForm } from "react-hook-form";
import { categories as defaultCategories, categoryColorOptions, iconOptions } from "../../mongodb/habits.js"
import { getIconsPath } from "../../utils/getIconsPath.js"
import style from "./modal.module.scss"

const Modal = ({ setIsModalOpen }) => {
  const [ newCategory, setNewCategory ] = useState ({
    name: "",
    color: "",
    icon: "",
    id: crypto.randomUUID(),
  })

  const { formState, register, handleSubmit } = useForm()
  const { errors } = formState
  
  function addNewCategory(newCat) {
    const allCategories = JSON.parse(localStorage.getItem('Categories')) || defaultCategories
    localStorage.setItem('Categories', JSON.stringify([...allCategories, newCat]))
  }

  function handleAddNew() {
    addNewCategory(newCategory)
    setIsModalOpen(prev => prev = !prev)
  }

  return (
      <div className={style.modalMain}>
          <div className={style.modal}>
              <div className={style.modalWrap} id="modalWrap">
                  <h1>Create new category</h1>
                  <div className={style.labInp}>
                      <label htmlFor="">Add:</label>
                      <input
                          className={style.catInput}
                          value={newCategory.name}
                          {...register('category', {
                              type: 'text',
                              required: 'Please enter a new category',
                              onChange: (e) =>
                                  setNewCategory((prev) => ({
                                      ...prev,
                                      name: e.target.value,
                                  })),
                          })}
                      />
                  </div>
                  <span className={style.errorMessage}>{errors.category?.message}</span>
                  <span>Pick a color:</span>
                  <ul className={style.catColors}>
                      {categoryColorOptions.map((item) => {
                          const backgroundColor = {
                              backgroundColor: item.colorCode,
                          }
                          return (
                              <li
                                  key={item.id}
                                  className={style.colorDiv}
                                  style={backgroundColor}
                                  onClick={() => {
                                      setNewCategory((prev) => ({
                                          ...prev,
                                          color: item.colorCode,
                                      }))
                                  }}
                              ></li>
                          )
                      })}
                  </ul>
                  <span>Pick an icon:</span>
                  <ul className={style.icons}>
                      {iconOptions.map((item) => (
                          <img
                              key={item.id}
                              className={style.iconPic}
                              src={getIconsPath(item.icon)}
                              onClick={() =>
                                  setNewCategory((prev) => ({
                                      ...prev,
                                      icon: item.icon,
                                  }))
                              }
                          ></img>
                      ))}
                  </ul>
                  <button className={style.catBtn} onClick={handleSubmit(handleAddNew)}>
                      Save and close
                  </button>
                  <div className={`${style.blue} ${style.circle}`}></div>
                  <div className={`${style.pink} ${style.circle}`}></div>
              </div>
          </div>
      </div>
  )
};

export default Modal;
