import Calender from './calender/Calender';
import Habits from './Habits';
import WeeklyStatsPreview from './WeeklyStatsPreview';
import Button from "./Test.jsx"
import style from "./overview.module.scss"

const Overview = ({habits, setHabits}) => {
  const name = /* username ?? */ "Guest"
  
  return (<main className={style.main}>
            <Calender />
            <h1>Hello, {name}</h1>
            <Button onChange={setHabits}/>
            <div className={style.habits}>
              <div className={style.heading}>
                <h2>Today</h2>
                <a className={style.more} href="">see more</a>
              </div>
              <Habits habits={habits}/>
            </div>
            <WeeklyStatsPreview />
          </main>
         )
};

export default Overview;
