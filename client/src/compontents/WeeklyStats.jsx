import style from "./weeklyStats.module.scss"
import { useContext } from "react"
import StatsContext from "../context/StatsContext"

const WeeklyStats = () => {
  const { habitsCount, habitsCompleted, countPercentage } = useContext(StatsContext)
  
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
