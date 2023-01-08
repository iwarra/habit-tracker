import style from "./calender.module.scss";
import { getDate, datesOfCurrentWeek, changeWeek } from '../../utils/timeUtils.js'
import { useState } from "react";
const date = getDate()

const Calender = () => {
const [weekToShow, setWeekToShow] = useState(datesOfCurrentWeek())

function handleWeekChange(option) {
  let start = weekToShow[0].date
  //console.log(weekToShow)
  setWeekToShow(() => changeWeek(start, option))
}

/*function handleShowDay(dateToShow) {
    setShowDay(dateToShow)
    setHabitsToShow(habits)
  } */

  return (
          <div className={style.wrapper}>
            <div className={style.heading}>
              <h2>{`${date.nameOfDay()}, ${date.month()} ${date.date()}`}</h2> 
              <div className={style.arrows}>
                <span role="button" onClick={() => handleWeekChange('minus')} >&lt;</span>
                <span role="button" onClick={() => handleWeekChange('plus')}>&gt;</span>
              </div>
            </div>
            <ul className={style.dates}> 
              {weekToShow.map((week) => {
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

export default Calender;