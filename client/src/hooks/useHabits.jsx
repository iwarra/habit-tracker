import { useContext } from "react"
import { getAllItems } from "../utils/localStorage/getAllItems"
import { updateItem } from "../utils/localStorage/updateItem"
import StatsContext from "../context/StatsContext"
import HabitContext from "../context/HabitContext"

export const useHabits = () => {
  const { setHabitsCompleted } = useContext(StatsContext)
  const { habits, setHabits } = useContext(HabitContext)

  function updateChecks(item) {
    setHabits(prev => prev.map(habit => habit.id === item.id ? {...habit, checked: !habit.checked} : habit))
  }

  //rename
  function handleCheck(item) {
    updateChecks(item)
    updateItem(item.id, 'habitList')
    setHabitsCompleted(getAllItems('habitList').filter(item => item.checked === true).length)
  }

  return {habits, handleCheck}
}