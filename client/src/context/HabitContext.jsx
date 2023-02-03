import { createContext, useState } from "react"
import { getAllItems } from "../utils/localStorage/getAllItems"

const HabitContext = createContext()

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState(getAllItems('habitList'))

  return (
    <HabitContext.Provider value={{ habits, setHabits }}>
      {children}
    </HabitContext.Provider>
  )
}

export default HabitContext