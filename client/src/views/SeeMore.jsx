import React from "react"
import style from "./seeMore.module.scss"
import { getAllItems } from '../utils/localStorage/getAllItems.js'

const SeeMore = () => {
  const name = /* username ?? */ 'Ivona'
  const allHabits = getAllItems('habitList')

  return (
    <div className={style.more}>
      {name === 'Guest' ? <p>Please log in to see more</p> : <h1>All habits:</h1>}
      <ul className={style.list}>
        {allHabits.map(item => {
          return (
            <li key={item.id} style={{ backgroundColor: item.color }} className={style.habit}>
              <h2>{item.name}</h2>
              <p>Category: {item.category}</p>
              <p>Repetition: {item.repetition}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SeeMore
