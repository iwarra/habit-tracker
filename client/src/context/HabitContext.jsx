import { createContext, useState } from "react"
import { getAllItems } from "../utils/localStorage/getAllItems"

const HabitContext = createContext()

export const HabitProvider = ({ children }) => {

   let sortedHabits = getAllItems('habitList').sort((a, b) => {
    if (a.checked && !b.checked) {
      return 1 
    }
     if (!a.checked && b.checked) {
       return -1 
     }
     return 0 
   })
  
  const [habits, setHabits] = useState(sortedHabits)

  return (
    <HabitContext.Provider value={{ habits, setHabits }}>
      {children}
    </HabitContext.Provider>
  )
}

export default HabitContext