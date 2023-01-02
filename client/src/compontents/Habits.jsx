import HabitCard from './HabitCard'
import style from "./habits.module.scss"

const Habits = ({ list, deleteItem }) => {
  if (list.length === 0) return <div>No habits to show</div>

  return (
          <ul className={style.ul}>
            {list.map(item => 
              <HabitCard key={item.id} item={item} deleteItem={deleteItem} />)}
          </ul>
         )
};

export default Habits;