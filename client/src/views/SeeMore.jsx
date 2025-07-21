import React from 'react'
import { useState } from 'react'
import style from './seeMore.module.scss'
import { getAllItems } from '../utils/localStorage/getAllItems.js'
import { useHabits } from '../hooks/useHabits'

const SeeMore = () => {
  const name = /* username ?? */ 'Ivona'
  const allHabits = getAllItems('habitList')
  const { filterHabitsByFrequency } = useHabits()
  const [filterOption, setFilterOption] = useState('All')
  const filteredHabits = filterHabitsByFrequency(allHabits, filterOption)

  return (
    <div className={style.more}>
      {name === 'Guest' ? <p>Please log in to see more</p> : <h1>All habits:</h1>}
      <h2>Filter by:</h2>
      <div className={style.habitFilter}>
        <label>
          <input
            type="radio"
            value="All"
            checked={filterOption === 'All'}
            onChange={() => setFilterOption('All')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="Daily"
            checked={filterOption === 'Daily'}
            onChange={() => setFilterOption('Daily')}
          />
          Daily
        </label>
        <label>
          <input
            type="radio"
            value="Weekly"
            checked={filterOption === 'Weekly'}
            onChange={() => setFilterOption('Weekly')}
          />
          Weekly
        </label>
        <label>
          <input
            type="radio"
            value="On weekends"
            checked={filterOption === 'On weekends'}
            onChange={() => setFilterOption('On weekends')}
          />
          On weekends
        </label>
        <label>
          <input
            type="radio"
            value="On work days"
            checked={filterOption === 'On work days'}
            onChange={() => setFilterOption('On work days')}
          />
          On work days
        </label>
      </div>
      <ul className={style.list}>
        {filteredHabits.length === 0 ? (
          <h2>No habits to show</h2>
        ) : (
          filteredHabits.map((item) => (
            <li key={item.id} style={{ backgroundColor: item.color }} className={style.habit}>
              <h2>{item.name}</h2>
              <div>
                <span className="bold">Category:</span>
                <span>{item.category}</span>
              </div>
              <div>
                <span className="bold">Repetition:</span>
                <span>{item.repetition}</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default SeeMore
