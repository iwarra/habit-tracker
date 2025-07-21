import HabitCard from "./HabitCard"
import style from "./habits.module.scss"

const Habits = ({ habits, updateAll }) => {
  if (!habits.length) return <h2>No habits to show</h2>

  return (
    <ul className={style.habits}>
      {habits.map((item) => (
        <HabitCard key={item.id} updateAll={updateAll} item={item} />
      ))}
    </ul>
  )
}

export default Habits;