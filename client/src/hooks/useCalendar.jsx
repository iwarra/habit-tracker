import { useState } from "react"
import { dateObject } from "../utils/timeUtils.js"
import getWeek from "date-fns/getWeek"
import {
  startOfDay,
  endOfDay,
  isSameDay,
  isWeekend,
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
} from 'date-fns'
import { getWeekDates } from "../utils/timeUtils.js"

const today = getWeekDates().filter((day) => day.today === true).at(0).date

export const useCalendar = () => {
  const [dates, setDates] = useState(getWeekDates())

  const calendarTitle = () => {
    if (!dates.some(el => el.today === true)) {
      return `Week number: ${getWeek(dates.at(0).date)}`
    }
    dateObject.setDate = today
    return `${dateObject.nameOfDay}, ${dateObject.month} ${dateObject.getDate}`
  }

  const handleDateToShow = (dayName, date) => {
    // open a page for that date
    // URL should be some form of the date --> the date needs to be sent into the new page
    // Habits from that day should be displayed (with some editing options)
  }

  const getHabitsForDate = (date, habits) => {
    //send date from calender with click event?
    // get dates for habits based on the repetition property
    //Filter habits after the selected date
  }

  return { calendarTitle, setDates, dates, handleDateToShow }
}

