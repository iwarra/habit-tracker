import { createContext, useState } from "react"
import { getAllItems } from "../utils/localStorage/getAllItems.js"

const StatsContext = createContext({})

export const StatsProvider =({ children })=> {
  const [habitsCount, setHabitsCount] = useState(getAllItems('habitList').length)
  const [habitsCompleted, setHabitsCompleted] = useState(getAllItems('habitList').filter(item => item.checked === true).length)
  
  function countPercentage() {
    return `${Math.floor((habitsCompleted / habitsCount) * 100)}%`
  }

  const returnedValue = {
    habitsCount, 
    habitsCompleted, 
    setHabitsCompleted, 
    setHabitsCount, 
    countPercentage,
  }

  return (
    <StatsContext.Provider value={returnedValue}>
      {children}
    </StatsContext.Provider>
  )
}

export default StatsContext