import HabitCard from './HabitCard'
import style from "./habits.module.scss"

const Habits = ({habits}) => {
  if (!habits.length) return <div>No habits to show</div>

  return (
          <ul className={style.ul}>
            {habits.map(item => <HabitCard item={item} key={item.id}/>)}
          </ul>
         )
};

export default Habits;