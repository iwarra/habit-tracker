import Calendar from './calendar/Calendar'
import Habits from './Habits'
import WeeklyStatsPreview from './WeeklyStatsPreview'
import style from './overview.module.scss'
import { useState } from 'react'
import { getAllItems } from '../utils/localStorage/getAllItems.js'
import { serveDefault } from "../utils/localStorage/serveDefault.js";

// serve default Habits to localStorage
serveDefault()

const Overview = () => {
  const [habits, setHabits] = useState(getAllItems())
  const name = /* username ?? */ "Guest"
  
  return (
          <main className={style.main}>
            <Calendar />
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
