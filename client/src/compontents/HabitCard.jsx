import { TbChecklist } from 'react-icons/tb';
import style from './habitCard.module.scss'

const HabitCard = ({item}) => {
  return (
          <li className={style.container}>
            <div className={style.main}>
              <TbChecklist className={style.icon}/>
              <div className={style.summary}>
                <h3>{item.habit}</h3>
                <em className={style.freq}>Time</em>
              </div>
            </div>
            <div className={style.footer}>
              <span>0/30</span>
              <input type="checkbox" name="checkbox" id="" value=""/>
            </div>
          </li>
         );
};

export default HabitCard;
