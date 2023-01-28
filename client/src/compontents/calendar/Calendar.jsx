import style from "./calendar.module.scss"
import { useCalendar } from '../../hooks/useCalendar.jsx'

const Calendar = () => {
  const { week, handleWeek, calendarTitle } = useCalendar()

  return (
          <div className={style.wrapper}>
            <div className={`${style.red} ${style.circle}`}></div>
            <div className={`${style.purple} ${style.circle}`}></div>
            <div className={`${style.pink} ${style.circle}`}></div>
            <div className={style.heading}>
              <h2>{calendarTitle()}</h2> 
              <div className={style.arrows}>
                <span role="button" 
                  className={style.leftArrow}
                  onClick={() => handleWeek('previous')}>&lt;</span>
                <span role="button" 
                  className={style.rightArrow}
                  onClick={() => handleWeek('next')}>&gt;</span>
              </div>
            </div>
            <ul className={style.dates}> 
              {week.map((week) => {
                const { date, day, id, today } = week
                const hightlight = today ? style.active : style.inactive

                return (
                  <li key={id}>
                    <span>{day}</span>
                    <div className={hightlight}>
                      <span /* onClick={() => handleShowDay(date)} */>{date}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )
};

export default Calendar;