import { useState } from 'react'
import { dateObject } from '../utils/timeUtils.js'
import getWeek from 'date-fns/getWeek'
import {
  startOfDay,
  endOfDay,
  eachDayOfInterval,
  eachWeekendOfInterval,
  eachWeekOfInterval,
  isSameDay,
} from 'date-fns'
import toDate from 'date-fns/toDate'
import isWeekend from 'date-fns/isWeekend'
import { getWeekDates } from '../utils/timeUtils.js'

const today = getWeekDates()
  .filter((day) => day.today === true)
  .at(0).date

export const useCalendar = () => {
  const [dates, setDates] = useState(getWeekDates())

  const calendarTitle = () => {
    if (!dates.some((el) => el.today === true)) {
      return `Week number: ${getWeek(dates.at(0).date)}`
    }
    dateObject.setDate = today
    return `${dateObject.nameOfDay}, ${dateObject.month} ${dateObject.getDate}`
  }

  // const filterHabitsByDate = (habits, date) => {
  //   const filteredHabits = habits.filter((habit) => {
  //     const habitDates = getHabitDates(habit, date)
  //     return habitDates.some((habitDate) => isSameDay(new Date(habitDate), new Date(date)))
  //   })
  //   return filteredHabits
  // }
  
  const filterHabitsByDate = (habits, date) => {
    let filteredHabits = habits.filter(habit => {
      console.log('lala')
      habitRepetitionCases(habit, date)
    })
    console.log(filteredHabits)
    return filteredHabits
  }


  const habitRepetitionCases = (habit, date) => {
    const { repetition } = habit
    let isPlanned
   
    switch (repetition) {
      case 'daily':
        isPlanned = true
        break
      case 'weekends':
        isPlanned = isWeekend(date)
        break
      case 'weekdays':
        isPlanned = !isWeekend(date)
        break
      case 'weekly':
        isPlanned = true
        break
      default:
        break
    }
    return isPlanned
  }


  //Refactor to show habits for a specified week number
  // const getHabitDates = (habit, date) => {
  //   const { repetition } = habit
  //   const start = startOfDay(toDate(new Date(date)))
  //   const end = endOfDay(toDate(new Date(date)))
  //   let dates = []
  //   const interval = {start: start, end: end}

  //   switch (repetition) {
  //     case 'daily':
  //       dates = eachDayOfInterval(interval)
  //       break
  //     case 'weekends':
  //       dates = eachWeekendOfInterval(interval)
  //       break
  //     case 'weekdays':
  //       dates = eachDayOfInterval(interval).map((date) => !isWeekend(date))
  //       break
  //     case 'weekly':
  //       dates = eachWeekOfInterval(interval)
  //       break
  //     default:
  //       break
  //   }
  //   return dates
  // }

  return { calendarTitle, setDates, dates, filterHabitsByDate }
}
