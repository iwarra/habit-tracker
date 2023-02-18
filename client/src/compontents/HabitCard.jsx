import style from './habitCard.module.scss'
import { getIconsPath } from '../utils/getIconsPath.js'

const HabitCard = ({ item, updateAll }) => {
  const { color, icon, name, repetition, monthlyTotal } = item
  const inlineStyle = { backgroundColor: color }

  return (
    <li className={style.container} style={inlineStyle}>
      <div className={style.main}>
        <img src={getIconsPath(icon)} className={style.icon} />
        <div className={style.summary}>
          <h3>{name}</h3>
          <em className={style.freq}>{repetition}</em>
        </div>
      </div>
      <div className={style.footer}>
        <span className={style.count}>Nr. of done/{monthlyTotal}</span>
        <input type="checkbox" onChange={() => updateAll(item)} checked={item.checked} />
      </div>
    </li>
  )
}

export default HabitCard;
