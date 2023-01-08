import Calender from './calender/Calender';
import Habits from './Habits';
import WeeklyStatsPreview from './WeeklyStatsPreview';
import style from "./overview.module.scss"
import { useState } from 'react';
import { habits as defaultHabits } from '../mongodb/habits.js'
import { getAllItems } from '../utils/localStorage/getAllItems';

if (!localStorage.getItem('habitList')) {
  localStorage.setItem('habitList', JSON.stringify([...defaultHabits]))
}

const Overview = () => {
  /* function arrayToShow(id) {
    return JSON.parse(localStorage.getItem('habitList')).filter(obj => {
      if (obj.id !== id) return obj
    })
  } */

  const [habits, setHabits] = useState(getAllItems())
  const name = /* username ?? */ "Guest"
  
  return (<main className={style.main}>
            <Calender />
            <h1>Hello, {name}</h1>
            <div className={style.habits}>
              <div className={style.heading}>
                <h2>Today</h2>
                <a className={style.more} href="">see more</a>
              </div>
              <Habits habits={habits}/>
            </div>
            <WeeklyStatsPreview />
          </main>
         )
};

export default Overview;
