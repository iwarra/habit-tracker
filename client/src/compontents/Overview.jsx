import Calendar from './calendar/Calendar'
import Habits from './Habits'
import WeeklyStats from './WeeklyStats'
import style from './overview.module.scss'
import { Link } from 'react-router-dom'
import { serveDefault } from '../utils/localStorage/serveDefault.js'
import { useHabits } from '../hooks/useHabits'

// serve default Habits to localStorage
serveDefault('habitList')

const Overview = () => {
  const { habits, updateAll } = useHabits()
  const name = /* username ?? */ "Guest"
  
  return (
    <main className={style.main}>
      <Calendar />
      <h1>Hello, {name}</h1>
      <div className={style.habits}>
        <div className={style.heading}>
          <h2>Today</h2>
          <Link className={style.seeMoreLink} to={'/more'}>
            see more
          </Link>
        </div>
        <Habits habits={habits} updateAll={updateAll} />
      </div>
      <WeeklyStats />
    </main>
  )
};

export default Overview;
