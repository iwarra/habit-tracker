import style from "./weeklyStats.module.scss"
import { useState, useEffect } from "react"
import { getAllItems } from "../utils/localStorage/getAllItems.js"
import { useContext } from "react"
import StatsContext from "../context/StatsContext"

const WeeklyStats = () => {
  //const { habitsCount, setHabitsCount, habitsCompleted, setHabitsCompleted} = useContext(StatsContext)
  
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
    <div className={style.container}>
        <h2>This week</h2>
        <div className={style.stats}>
          <div className={style.weekly}>
            <em>{habitsCount}</em>
            <span>Habits</span>
          </div>
          <div className={style.weekly}>
            <em>{habitsCompleted}</em>
            <span>Completed</span>
          </div>
          <div className={style.weekly}>
            <em>{countPercentage()}</em>
            <span>Progress</span>
          </div>
        </div>
      </div>
    );
};

export default WeeklyStats;
