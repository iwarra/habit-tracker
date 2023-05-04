import Calendar from '../compontents/calendar/Calendar'
import HabitCard from '../compontents/HabitCard'
import { useHabits } from '../hooks/useHabits'
import { useCalendar } from '../hooks/useCalendar'
import style from './date.module.scss'
import { useParams } from 'react-router-dom'

const Date = () => {
  const { updateAll } = useHabits()
  const { filteredHabits } = useCalendar()
  const { date } = useParams()
  const dateToDisplay = date.slice(0, 16)

  return (
    <div className={style.dateWrap}>
      <Calendar />
      <div className={style.miniWrap}>
        <h1>Habits for: {dateToDisplay}</h1>
        <ul className={style.habitsWrap}>
          {filteredHabits.map((item) => (
            <HabitCard key={item.id} updateAll={updateAll} item={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Date
