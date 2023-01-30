import style from "./calendar.module.scss"
import { useCalendar } from "../../hooks/useCalendar.jsx"
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io"

const Calendar = () => {
  const { week, handleWeek, calendarTitle } = useCalendar()

  return (
          <div className={style.wrapper}>
            <div className={`${style.red} ${style.circle}`}></div>
            <div className={`${style.blue} ${style.circle}`}></div>
            <div className={`${style.pink} ${style.circle}`}></div>
            <h2 className={style.heading}>{calendarTitle()}</h2> 
            <div className={style.datesWrap}>
              <IoMdArrowDropleft 
              role="button" 
              className={style.leftArrow}
              onClick={() => handleWeek('previous')}/>
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
              <IoMdArrowDropright 
              role="button" 
              onClick={() => handleWeek('next')}
              className={style.rightArrow}/>
            </div>
          </div>
        )
};

export default Calendar;