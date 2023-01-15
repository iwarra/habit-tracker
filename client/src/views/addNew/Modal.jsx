import { useRef } from "react";
import style from "./modal.module.scss"

const Modal = ({ newHabit, setNewHabit }) => {
  const initial = useRef()

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
                      value={newHabit.name}
                      onInput={() => {setNewHabit(initial.current.innerHTML)}}
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
            <button >Save and close</button>
          </div>
        </div>
      </div>
    );
};

export default Modal;
//onClick={() => setModal(prev => prev = !prev)}
