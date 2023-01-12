import { createContext, useState, useEffect } from "react";
import { getAllItems } from "../utils/localStorage/getAllItems.js"; 

const StatsContext = createContext({})

export const StatsProvider = ({ children }) => {
  const [habitsCount, setHabitsCount] = useState(0)
  const [habitsCompleted, setHabitsCompleted] = useState(0)

  function countPercentage() {
    return `${Math.floor((habitsCompleted / habitsCount) * 100)}%`
  }

  useEffect(() => {
    setHabitsCount(getAllItems().length)
    setHabitsCompleted(getAllItems().filter(item => item.checked === true).length)
  }, [])

  return (
    <StatsContext.Provider value={{
      habitsCount, habitsCompleted, setHabitsCompleted, setHabitsCount
    }}> 
      {children}
    </StatsContext.Provider>
  )
}

export default StatsContext