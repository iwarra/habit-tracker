import Calender from './calender/Calender';
import Habits from './Habits';
import { habits as initialHabits} from '../data/habits.js'
import { useState } from 'react';
import { formatNewItem } from '../utils/habitUtils.js'
import style from "./overview.module.scss"

const Overview = () => {
  const [list, setList] = useState(initialHabits)
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
              <Habits list={list} deleteItem=         {deleteItem}/>
            </div>
            <div className='statistics-wrapper'>
              <h2>This week</h2>
              <span>[List stats]</span>
            </div>
          </main>
         )
};

export default Overview;
