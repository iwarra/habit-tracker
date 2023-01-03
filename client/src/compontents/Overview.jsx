import Calender from './calender/Calender';
import Habits from './Habits';
import WeeklyStatsPreview from './WeeklyStatsPreview';
import { habits as initialHabits} from '../data/habits.js'
import { useState } from 'react';
import { formatNewItem } from '../utils/habitUtils.js'
import style from "./overview.module.scss"

const Overview = () => {
  const [list, setList] = useState(initialHabits)

  //Not used yet - refactor for database use
  const addItem = (newItem) => {
    setList(previousItems => {
      return [...previousItems, formatNewItem(newItem)]
    })
  }
  const deleteItem = (id) => {
    setList(previousItems => {
      return previousItems.filter(customer => customer.id != id)
    })
  }

  return (<main className={style.main}>
            <Calender />
            <h1>Hello, Harry</h1>
            <div className={style.habits}>
              <div className={style.heading}>
                <h2>Today</h2>
                <a className={style.more} href="">see more</a>
              </div>
              <Habits list={list}/>
            </div>
            <WeeklyStatsPreview initialHabits={initialHabits}/>
          </main>
         )
};

export default Overview;
