import { TbChecklist } from 'react-icons/tb';
import style from './habitCard.module.scss'

const HabitCard = ({item, key}) => {
  return (
          <li className={style.container} key={key}>
            <div className={style.main}>
              <TbChecklist className={style.icon}/>
              <div className={style.summary}>
                <h3>{item.name}</h3>
                <em className={style.freq}>{ item.frequency }</em>
              </div>
            </div>
            <div className={style.footer}>
              <span>done / {item.amount}</span>
              <input type="checkbox" name="checkbox" id="" value={item.checked}/>
            </div>
          </li>
         );
};

export default HabitCard;
