import style from './habitCard.module.scss'
import { getIconsPath } from '../utils/getIconsPath.js'
import { updateItem } from '../utils/localStorage/updateItem.js'
import { getAllItems } from '../utils/localStorage/getAllItems.js'
import { useState, useContext } from 'react'
import StatsContext from '../context/StatsContext'

const HabitCard = ({item}) => {
  const [check, setCheck] = useState(item.checked)
  const { setHabitsCompleted } = useContext(StatsContext)
  const {color, icon, name, repetition, monthlyTotal} = item
  const inlineStyle = {backgroundColor: color}
  
  function handleCheck(id) {
    setCheck((prev) => !prev)
    updateItem(id, 'habitList')
    setHabitsCompleted(getAllItems('habitList').filter(item => item.checked === true).length)
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
              <span className={style.count}>Nr. of done/{monthlyTotal}</span>
              <input type="checkbox"  
                onChange={() => handleCheck(item.id)}
                checked={check}/>
            </div>
          </li>
         );
};

export default HabitCard;
