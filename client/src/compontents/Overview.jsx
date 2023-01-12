import Calendar from './calendar/Calendar'
import Habits from './Habits'
import WeeklyStats from './WeeklyStats'
import style from './overview.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getAllItems } from '../utils/localStorage/getAllItems.js'
import { serveDefault } from '../utils/localStorage/serveDefault.js'
import StatsProvider from '../context/StatsContext'

// serve default Habits to localStorage
serveDefault()

const Overview = () => {
  const [habits, setHabits] = useState(getAllItems())
  const name = /* username ?? */ "Guest"
  
  return (
          <main className={style.main}>
            {/* <StatsProvider> */}
            <Calendar />
            <h1>Hello, {name}</h1>
            <div className={style.habits}>
              <div className={style.heading}>
                <h2>Today</h2>
                <Link className={style.more} >see more</Link>
              </div>
              <Habits habits={habits}/>
            </div>
            <WeeklyStats />
           {/*  </StatsProvider> */}
          </main>
         )
};

export default Overview;
