import { createContext, useState, useEffect } from "react";
import { getAllItems } from "../utils/localStorage/getAllItems.js"; 
import { serveDefault } from '../utils/localStorage/serveDefault.js'

const StatsContext = createContext({})
//serveDefault()

export const StatsProvider =({ children })=> {
  const [habitsCount, setHabitsCount] = useState(getAllItems().length)
  const [habitsCompleted, setHabitsCompleted] = useState(getAllItems().filter(item => item.checked === true).length)

  function countPercentage() {
    return `${Math.floor((habitsCompleted / habitsCount) * 100)}%`
  }

  return (
    <StatsContext.Provider value={{
      habitsCount, habitsCompleted, setHabitsCompleted, setHabitsCount, countPercentage
    }}>
      {children}
    </StatsContext.Provider>
  )
}

export default StatsContext