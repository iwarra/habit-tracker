import { useState } from 'react'
import { dateObject } from '../utils/timeUtils.js'
import getWeek from 'date-fns/getWeek'
import isWeekend from 'date-fns/isWeekend'
import { getWeekDates } from '../utils/timeUtils.js'
import { useParams } from 'react-router-dom'
import { useHabits } from './useHabits.jsx'

const today = getWeekDates()
  .filter((day) => day.today === true)
  .at(0).date

export const useCalendar = () => {
  const [dates, setDates] = useState(getWeekDates())
  const { date } = useParams()
  const { habits } = useHabits()

  const calendarTitle = () => {
    if (!dates.some((el) => el.today === true)) {
      return `Week number: ${getWeek(dates.at(0).date)}`
    }
    dateObject.setDate = today
    return `${dateObject.nameOfDay}, ${dateObject.month} ${dateObject.getDate}`
  }

  const habitRepetitionCases = (habit, date) => {
    const { repetition } = habit
    let isPlanned

    switch (repetition) {
      case 'Daily':
        isPlanned = true
        break
      case 'On weekends':
        isPlanned = isWeekend(date)
        break
      case 'On work days':
        isPlanned = !isWeekend(date)
        break
      case 'Weekly':
        isPlanned = true
        break
    }
    return isPlanned
  }

  const filterHabitsByDate = (habits, date) => {
    return habits.filter((habit) => habitRepetitionCases(habit, date))
  }

  const [filteredHabits, setFilteredHabits] = useState(filterHabitsByDate(habits, date))

  console.log(filteredHabits)

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

  return { calendarTitle, setDates, dates, filteredHabits }
}
