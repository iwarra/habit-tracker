import style from "./weeklyStatsPreview.module.scss"
import { getAllItems } from '../utils/localStorage/getAllItems'

const WeeklyStatsPreview = () => {
  const habitsTotal = getAllItems().length
  // create Stats util
  function countChecked() {
    return getAllItems().filter(item => item.checked === true).length
  }

  function countProgess() {
    return (countChecked() / habitsTotal) * 100
  }

  return (
    <div className={style.container}>
        <h2>This week</h2>
        <div className={style.stats}>
          <div className={style.weekly}>
            <em>{habitsTotal}</em>
            <span>Habits</span>
          </div>
          <div className={style.weekly}>
            <em>{countChecked()}</em>
            <span>Completed</span>
          </div>
          <div className={style.weekly}>
            <em>{countProgess()}%</em>
            <span>Progress</span>
          </div>
        </div>
      </div>
    );
};

export default WeeklyStatsPreview;
