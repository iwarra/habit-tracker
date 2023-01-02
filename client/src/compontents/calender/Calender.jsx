import style from "./calender.module.scss";
import { weekDays, getMonth, getDay } from '../../utils/timeUtils.js'

const day = getDay() 
const month = getMonth()
const date = new Date().getDate()

const Calender = () => {
  return (
          <div className={style.wrapper}>
            <div className={style.heading}>
              <h2>{`${day}, ${month} ${date}`}</h2> 
              <div className={style.arrows}>
                <span>&lt;</span>
                <span>&gt;</span>
              </div>
            </div>
            <ul className={style.dates}> 
              {weekDays.map(day => {
                return  <li key={crypto.randomUUID()}>
                {day.slice(0,1)}
                <div className={style.dateBox}>D</div>
              </li>
            })}
            </ul>
          </div>
        )
};

export default Calender;