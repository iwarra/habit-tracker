import Calendar from '../compontents/calendar/Calendar'
import HabitCard from '../compontents/HabitCard'
import { useHabits } from '../hooks/useHabits'
import { useCalendar } from '../hooks/useCalendar'
import style from './date.module.scss'
import { useParams } from 'react-router-dom'

const Date = () => {
  const { habits, updateAll } = useHabits()
  const { filterHabitsByDate } = useCalendar()
  const { date } = useParams()
  const dateToDisplay = date.slice(0, 16)
  const filtered = filterHabitsByDate(habits, date)

  return (
    <div className={style.dateWrap}>
      <Calendar />
      <div className={style.miniWrap}>
        <h1>Habits for: {dateToDisplay}</h1>
        <ul className={style.habitsWrap}>
          {filtered.map((item) => (
            <HabitCard key={item.id} updateAll={updateAll} item={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Date
