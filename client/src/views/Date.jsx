import Calendar from '../compontents/calendar/Calendar'
import HabitCard from '../compontents/HabitCard'
import { useHabits } from '../hooks/useHabits'
import style from './date.module.scss'
//import { useParams } from 'react-router-dom'

const Date = () => {
  const { habits, updateAll } = useHabits()
  //const params = useParams()

  //Habits need to be filtered by the chosen date instead of mapped
  return (
    <div className={style.dateWrap}>
      <Calendar />
      <div className={style.miniWrap}>
        <h1>Habits for a specified date</h1>
          <ul className={style.habitsWrap}>
            {habits.map((item) => (
              <HabitCard key={item.id} updateAll={updateAll} item={item} />
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Date
