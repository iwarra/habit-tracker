import style from './habitCard.module.scss'
import { getImageUrl } from '../utils/getImageUrl';

const HabitCard = ({item}) => {
  const {color, icon, name, repetition, checked, monthlyTotal} = item
  const inlineStyle = {backgroundColor: color}

  return (
          <li className={style.container} style={inlineStyle}>
            <div className={style.main}>
                <img src={getImageUrl(icon)} className={style.icon}/>
              <div className={style.summary}>
                <h3>{name}</h3>
                <em className={style.freq}>{repetition}</em>
              </div>
            </div>
            <div className={style.footer}>
              <span className={style.count}>0/{monthlyTotal}</span>
              <input type="checkbox" name="checkbox" id="" value={checked}/>
            </div>
          </li>
         );
};

export default HabitCard;
