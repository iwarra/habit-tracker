import style from "./calender.module.scss";
import { getDate, datesOfCurrentWeek } from '../../utils/timeUtils.js'

const date = getDate()

const Calender = () => {
  return (
          <div className={style.wrapper}>
            <div className={style.heading}>
              <h2>{`${date.nameOfDay()}, ${date.month()} ${date.date()}`}</h2> 
              <div className={style.arrows}>
                <span>&lt;</span>
                <span>&gt;</span>
              </div>
            </div>
            <ul className={style.dates}> 
              {datesOfCurrentWeek().map((week) => {
                const { date, day, id, today } = week
                const hightlight = today ? style.active : style.inactive

                return (
                  <li key={id}>
                    <span>{day}</span>
                    <div className={hightlight}>
                      <span>{date}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )
};

export default Calender;