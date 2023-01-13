import HabitCard from './HabitCard'
import style from "./habits.module.scss"

const Habits = ({ habits }) => {
  if (!habits.length) return <h2>No habits to show</h2>

  return (
          <ul className={style.ul}>
            {habits.map(item => <HabitCard key={item.id} item={item}/>)}
          </ul>
         )
};

export default Habits;