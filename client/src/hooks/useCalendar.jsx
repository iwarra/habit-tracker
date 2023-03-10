import { useState } from "react"
import { dateObject } from "../utils/timeUtils.js"
import getWeek from "date-fns/getWeek"
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

  return { calendarTitle, setDates, dates }
}

