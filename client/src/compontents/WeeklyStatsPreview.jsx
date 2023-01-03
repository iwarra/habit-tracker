import style from "./weeklyStatsPreview.module.scss"

const WeeklyStatsPreview = ( {initialHabits} ) => {
  return (
    <div className={style.container}>
        <h2>This week</h2>
        <div className={style.stats}>
          <div className={style.weekly}>
            <em>{initialHabits.length}</em>
            <span>Habits</span>
          </div>
          <div className={style.weekly}>
            <em>1</em>
            <span>Completed</span>
          </div>
          <div className={style.weekly}>
            <em>20%</em>
            <span>Progress</span>
          </div>
        </div>
      </div>
    );
};

export default WeeklyStatsPreview;
