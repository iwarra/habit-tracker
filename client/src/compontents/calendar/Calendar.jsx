import style from './calendar.module.scss'
import { useCalendar } from '../../hooks/useCalendar.jsx'
import { useState, useEffect } from 'react'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import { getWeekDates } from '../../utils/timeUtils.js'

const Calendar = () => {
  const { calendarTitle, dates, setDates } = useCalendar()
  const [numWeeks, setNumWeeks] = useState(0)

  useEffect(() => {
    setDates(getWeekDates(numWeeks))
  }, [numWeeks])

  const handlePrevWeek = () => {
    setNumWeeks((prevNumWeeks) => prevNumWeeks - 1)
  }
  const handleNextWeek = () => {
    setNumWeeks((prevNumWeeks) => prevNumWeeks + 1)
  }

  return (
    <div className={style.wrapper}>
      <div className={`${style.red} ${style.circle}`}></div>
      <div className={`${style.blue} ${style.circle}`}></div>
      <div className={`${style.pink} ${style.circle}`}></div>
      <h2 className={style.heading}>{calendarTitle()}</h2>
      <div className={style.datesWrap}>
        <IoMdArrowDropleft role="button" className={style.leftArrow} onClick={handlePrevWeek} />
        <ul className={style.dates}>
          {dates.map((week) => {
            const { date, dayName, id, today } = week
            const hightlight = today ? style.active : style.inactive

            return (
              <li key={id}>
                <span>{dayName.slice(0, 1)}</span>
                <div className={hightlight}>
                  <a href="/date">{date.getDate()}</a>
                </div>
              </li>
            )
          })}
        </ul>
        <IoMdArrowDropright role="button" onClick={handleNextWeek} className={style.rightArrow} />
      </div>
    </div>
  )
}

export default Calendar
