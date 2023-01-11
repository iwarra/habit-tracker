import nextSunday from 'date-fns/nextSunday';
import previousSunday from 'date-fns/previousSunday';
import getWeek from 'date-fns/getWeek'
import { useState } from "react";
import { datesOfWeek, getDate } from '../../utils/timeUtils.js';
import style from "./calendar.module.scss";
const today = datesOfWeek().filter(day => day.today === true)[0].fullDate

const Calendar = () => {
  const [week, setWeek] = useState(datesOfWeek())
  const [date, setDate] = useState(today)

function handleWeekChange(option) {
  let date = week[0].fullDate
  let newWeek;

  if (option === "add") newWeek = datesOfWeek(nextSunday(date))
  if (option === "sub") newWeek = datesOfWeek(previousSunday(date))

  setWeek(newWeek)
  setDate(newWeek[0].fullDate)
}

function calendarTitle() {
  if (getWeek(today) !== getWeek(date)) return `Week number: ${getWeek(date)}`
  return `${getDate().nameOfDay(today)}, ${getDate().month(today)} ${getDate().date(today)}`
}

  return (
          <div className={style.wrapper}>
            <div className={style.heading}>
              <h2>{calendarTitle()}</h2> 
              <div className={style.arrows}>
                <span role="button" onClick={() => handleWeekChange('sub')} >&lt;</span>
                <span role="button" onClick={() => handleWeekChange('add')}>&gt;</span>
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