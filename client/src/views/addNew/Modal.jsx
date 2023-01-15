import { useRef, useState } from "react";
import style from "./modal.module.scss"
import { categories as defaultCategories} from "../../mongodb/habits.js"

const Modal = ({ setIsModalOpen }) => {
  const initial = useRef()
  const newCategory = {
    name: "",
    color: "",
    icon: "",
    id: crypto.randomUUID(),
  }
  console.log(newCategory)

  function addNewCategory(newCat) {
    const allCategories = JSON.parse(localStorage.getItem('Categories')) || defaultCategories
    localStorage.setItem('Categories', JSON.stringify([...allCategories, newCat]))
  }

  return (
      <div className={style.modalMain}>
        <div className={style.modal}>
          <div className={style.modalWrap} id="modalWrap">
              <h1>Create new category</h1>
            <div className={style.labInp}>
              <label htmlFor="">Add:</label>
              <span className={style.catInput}
                      contentEditable=""
                      ref={initial}
                      value={newCategory.name}
                      onInput={() => {
                        newCategory.name = initial.current.innerHTML
                        console.log(newCategory.name)
                      }}
                    />
            </div>
            <select name="colors" id="cat-colors">
              <option value="">Pick a color</option>
              <option value="default">Default</option>
              <option value="blue">Blue</option>
              <option value="pink">Pink</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>  
            <select name="icons" id="cat-icons">
              <option value="">Pick an icon</option>
              <option value="">Default</option>
            </select>
            <button 
              onClick={() => {
                addNewCategory(newCategory)
                setIsModalOpen(prev => prev = !prev)
                }}>
                  Save and close
            </button>
          </div>
        </div>
      </div>
    );
};

export default Modal;
//onClick={() => }
