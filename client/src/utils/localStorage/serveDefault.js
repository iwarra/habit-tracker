import { habits as defaultHabits } from "../../mongodb/habits.js"
import { categories as defaultCategories } from "../../mongodb/habits"

export function serveDefault(selector) {
  let defaultItems;
  if (selector === 'habitList') defaultItems = defaultHabits
  if (selector === 'Categories') defaultItems = defaultCategories
  
  if (!localStorage.getItem(selector)) {
    localStorage.setItem(selector, JSON.stringify([...defaultItems]))
  }
}