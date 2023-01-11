import { habits as defaultHabits } from "../../mongodb/habits.js"

export function serveDefault() {
  if (!localStorage.getItem('habitList')) {
    localStorage.setItem('habitList', JSON.stringify([...defaultHabits]))
  }
}