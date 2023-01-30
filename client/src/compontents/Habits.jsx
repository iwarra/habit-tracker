import HabitCard from "./HabitCard"
import style from "./habits.module.scss"
import { useState } from "react"

const Habits = ({ habits }) => {
  const [habitsOrder, setHabitsOrder] = useState(habits.filter(item => item.checked === false))

  if (!habits.length) return <h2>No habits to show</h2>

  return (
          <ul className={style.habits}>
            {habits.map(item => <HabitCard key={item.id} item={item}/>)}
          </ul>
         )
};

export default Habits;