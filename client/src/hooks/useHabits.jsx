import { useContext } from 'react'
import { getAllItems } from '../utils/localStorage/getAllItems'
import { updateItem } from '../utils/localStorage/updateItem'
import StatsContext from '../context/StatsContext'
import HabitContext from '../context/HabitContext'
import confetti from 'canvas-confetti'
import { addItem as addItemToLocalStorage } from '../utils/localStorage/addItem'

export const useHabits = () => {
  const { setHabitsCompleted } = useContext(StatsContext)
  const { habits, setHabits } = useContext(HabitContext)

  function updateChecks(item) {
    setHabits((prev) =>
      prev.map((habit) => (habit.id === item.id ? { ...habit, checked: !habit.checked } : habit))
    )
  }

  function addNewHabit(newItem) {
    addItemToLocalStorage(newItem, 'habitList')
    setHabits((prev) => [...prev, newItem])
  }

  function updateAll(item) {
    updateChecks(item)
    updateItem(item.id, 'habitList')
    setHabitsCompleted(getAllItems('habitList').filter((item) => item.checked === true).length)
    if (item.checked === false) return confetti()
  }

  function filterHabitsByFrequency(habits, filterOption) {
    let filteredArr;
    
    switch (filterOption) {
      case 'Daily':
        filteredArr = habits.filter((item) => item.repetition === 'Daily') 
        break
      case 'Weekly':
        filteredArr = habits.filter((item) => item.repetition === 'Weekly') 
        break
      case 'On weekends':
        filteredArr = habits.filter((item) => item.repetition === 'On weekends') 
        break
      case 'On work days':
        filteredArr = habits.filter((item) => item.repetition === 'On work days') 
        break
      case 'All': 
        filteredArr = habits
        break
    }

    return filteredArr
  }

  return { habits, updateAll, addNewHabit, filterHabitsByFrequency }
}
