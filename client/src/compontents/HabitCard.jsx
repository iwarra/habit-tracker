import style from './habitCard.module.scss'
import { getIconsPath } from '../utils/getIconsPath';
import { updateItem } from '../utils/localStorage/updateItem';
import { useState } from 'react';


const HabitCard = ({item}) => {
  const [check, setCheck] = useState(item.checked)
  const {color, icon, name, repetition, monthlyTotal} = item
  const inlineStyle = {backgroundColor: color}

  function handleCheck(id) {
      setCheck((prev) => !prev)
      updateItem(id) 
    }

  return (
          <li className={style.container} style={inlineStyle}>
            <div className={style.main}>
                <img src={getIconsPath(icon)} className={style.icon}/>
              <div className={style.summary}>
                <h3>{name}</h3>
                <em className={style.freq}>{repetition}</em>
              </div>
            </div>
            <div className={style.footer}>
              <span className={style.count}>0/{monthlyTotal}</span>
              <input type="checkbox"  
                onChange={() => handleCheck(item.id)}
                checked={check}/>
            </div>
          </li>
         );
};

export default HabitCard;
