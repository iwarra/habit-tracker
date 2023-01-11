import { useState } from "react"
import { datesOfWeek, dateObject } from "../utils/timeUtils.js"
import nextSunday from 'date-fns/nextSunday'
import previousSunday from 'date-fns/previousSunday'
import getWeek from 'date-fns/getWeek'

const today = datesOfWeek().filter(day => day.today === true)[0].fullDate

export const useCalendar = () => {
  const [week, setWeek] = useState(datesOfWeek())
  const [date, setDate] = useState(today)

  const handleWeek = (option) => {
    let startDate = week[0].fullDate
    let newWeek;

    if (option === "next") newWeek = datesOfWeek(nextSunday(startDate))
    if (option === "previous") newWeek = datesOfWeek(previousSunday(startDate))

    setWeek(newWeek)
    setDate(newWeek[0].fullDate)
  }

  const calendarTitle = () => {
    if (getWeek(today) !== getWeek(date)) return `Week number: ${getWeek(date)}`
    dateObject.setDate = today
    return `${dateObject.nameOfDay}, ${dateObject.month} ${dateObject.getDate}`
  }

  return { week, date, handleWeek, calendarTitle }
}

