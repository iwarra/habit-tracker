import style from "./modal.module.scss"
import { useState } from "react";
import { categories as defaultCategories} from "../../mongodb/habits.js"
import { categoryColorOptions, iconOptions } from "../../mongodb/habits.js"
import { getIconsPath } from '../../utils/getIconsPath.js'

const Modal = ({ setIsModalOpen }) => {
  const [ newCategory, setNewCategory ] = useState ({
    name: "",
    color: "",
    icon: "",
    id: crypto.randomUUID(),
  })

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
              <input className={style.catInput}
                      value={newCategory.name}
                      onChange={(e) => setNewCategory(prev => ({
                        ...prev,
                        name: e.target.value}))
                      }
                    />
            </div>
            <span>Pick a color:</span>
            <ul className={style.catColors}>
              {categoryColorOptions.map(item => {
                const backgroundColor = {backgroundColor: item.colorCode}
                console.log(item)
                return (
                  <li key={item.id} className={style.colorDiv} style={backgroundColor} 
                  onClick={() => 
                    { console.log(item.colorCode)
                      setNewCategory(prev => ({...prev, color: item.colorCode}))}}
                  ></li>)
              })}
            </ul>
            <span>Pick an icon:</span>
            <ul className={style.icons}>
              {iconOptions.map(item => 
              <img key={item.id} className={style.iconPic} src={getIconsPath(item.icon)} onClick={() => 
                setNewCategory(prev => ({...prev, icon: item.icon}))}></img>)}
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
