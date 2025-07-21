import style from './calendar.module.scss'
import { useCalendar } from '../../hooks/useCalendar.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import { getWeekDates } from '../../utils/timeUtils.js'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'

const Calendar = () => {
  const { calendarTitle, dates, setDates } = useCalendar()
  const [weekNr, setWeekNr] = useState(0)
  const [selectedDateStr, setSelectedDateStr] = useState(null)
  const { date: dateParam } = useParams()

  useEffect(() => {
    setDates(getWeekDates(weekNr))
  }, [weekNr])

  useEffect(() => {
    if (dateParam) {
      setSelectedDateStr(dateParam)
    }
  }, [dateParam])

  const handlePrevWeek = () => {
    setWeekNr((prev) => prev - 1)
  }
  const handleNextWeek = () => {
    setWeekNr((prev) => prev + 1)
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
            const dateStr = format(date, 'yyyy-MM-dd')
            const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
            const isSelected = selectedDateStr === dateStr

            let highlight = style.inactive
            if (isSelected) {
              highlight = style.active
            } else if (isToday) {
              highlight = style.today
            }

            return (
              <li key={id}>
                <span>{dayName.slice(0, 1)}</span>
                <div className={highlight}>
                  <Link to={`/date/${dateStr}`} onClick={() => setSelectedDateStr(dateStr)}>
                    {date.getDate()}
                  </Link>
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
