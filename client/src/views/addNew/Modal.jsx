import { useRef } from "react";
import style from "./modal.module.scss"

const Modal = ({ newHabit, setNewHabit }) => {
  const initial = useRef()

  return (
      <div className={style.modalMain}>
        <div className={style.modal}>
          <div className={style.modalWrap}>
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
            <button onClick={() => setModal(prev => prev = !prev)}>Close</button>
          </div>
        </div>
      </div>
    );
};

export default Modal;
