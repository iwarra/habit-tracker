import style from "./modal.module.scss"
import { useRef } from "react";
import { categories as defaultCategories} from "../../mongodb/habits.js"
import { categoryColorOptions, iconOptions } from "../../mongodb/habits.js"
import { getIconsPath } from '../../utils/getIconsPath.js'

const Modal = ({ setIsModalOpen }) => {
  const initial = useRef()
  const newCategory = {
    name: "",
    color: "",
    icon: "",
    id: crypto.randomUUID(),
  }

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
            <span>Pick a color:</span>
            <ul className={style.catColors}>
              {categoryColorOptions.map(item => {
                const backgroundColor = {backgroundColor: item.colorCode}

                return (
                  <li key={item.id} className={style.colorDiv} style={backgroundColor} onClick={() => newCategory.color = item.colorCode}></li>)
              })}
            </ul>
            <span>Pick an icon:</span>
            <ul className={style.icons}>
              {iconOptions.map(item => 
              <img key={item.id} className={style.iconPic} src={getIconsPath(item.icon)} onClick={() => newCategory.icon = item.icon}></img>)}
            </ul>
            <button className={style.catBtn}
              onClick={() => {
                addNewCategory(newCategory)
                setIsModalOpen(prev => prev = !prev)
                }}>
                  Save and close
            </button>
            <div className={`${style.blue} ${style.circle}`}></div>
            <div className={`${style.pink} ${style.circle}`}></div>
          </div>
        </div>
      </div>
    );
};

export default Modal;
//onClick={() => }
