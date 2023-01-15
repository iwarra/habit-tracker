import { getAllItems } from './getAllItems'

export function updateItem(id, selector) {
  const updated = getAllItems(selector).map(habit => 
    habit.id === id ? {...habit, checked: !habit.checked} : habit
  )
  localStorage.setItem(selector, JSON.stringify(updated))
}
