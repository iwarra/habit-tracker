import eachWeekendOfMonth from 'date-fns/eachWeekendOfMonth'
import getWeeksInMonth from 'date-fns/getWeeksInMonth'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import { startOfWeek, endOfWeek, addWeeks, format, eachDayOfInterval } from 'date-fns'

const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
const shortFormat = (date) =>
    new Intl.DateTimeFormat('se-SV', { dateStyle: 'short' }).format(date)

const dateObject = {
    date: '',
    set setDate(value) {
        this.date = new Date(value)
    },
    get getDate() {
        if (this.date !== '' || undefined) return this.date.getDate()
        return (this.date = new Date().getDate())
    },
    get nameOfDay() {
        return weekDays[this.date.getDay()]
    },
    get numberOfDay() {
        return this.date.getDay()
    },
    get month() {
        return months[this.date.getMonth()]
    },
}

function getWeekDates(numWeeks = 0) {
  const now = new Date()
  const start = addWeeks(startOfWeek(now), numWeeks)
  const end = addWeeks(endOfWeek(now), numWeeks)

  return eachDayOfInterval({ start, end }).map((date) => ({
    date,
    id: crypto.randomUUID(),
    today: format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd'),
    dayName: format(date, 'EEEE'),
  }))
}


// used for setting habit frequency
function repetitionCalc() {
    const currentDate = new Date()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const weekendDaysNr = eachWeekendOfMonth(new Date(year, month)).length
    const nrOfWeeks = getWeeksInMonth(new Date(year, month))
    const daysInMonth = getDaysInMonth(new Date(year, month))
    const workingDays = daysInMonth - weekendDaysNr
    return {
        weekendDaysNr,
        nrOfWeeks,
        daysInMonth,
        workingDays,
    }
}

export { dateObject, repetitionCalc, getWeekDates }
