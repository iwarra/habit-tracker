import { getAllItems } from './getAllItems'

export function updateItem(id) {
  const updated = getAllItems().map(habit => 
    habit.id === id ? {...habit, checked: !habit.checked} : habit
  )
  localStorage.setItem('habitList', JSON.stringify(updated))
}
