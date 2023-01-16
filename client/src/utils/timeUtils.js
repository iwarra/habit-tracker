import eachWeekendOfMonth from 'date-fns/eachWeekendOfMonth'
import getWeeksInMonth from 'date-fns/getWeeksInMonth'
import getDaysInMonth from 'date-fns/getDaysInMonth'

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const shortFormat = (date) => new Intl.DateTimeFormat('se-SV', { dateStyle: "short" }).format(date)

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
  }
}


function datesOfWeek(date) {
  const current = date ?? new Date()
  let startingPoint = new Date().setDate(current.getDate() - current.getDay())
  return new Array(7)
    .fill()
    .map((_, slot) => {
      const nextDate = new Date(startingPoint).getDate() + slot
      const date = current.setDate(nextDate)
      return {
        date: new Date(date).getDate(),
        month: new Date(date).getMonth(),
        year: new Date(date).getFullYear()
      }
    })
    .map((item, index) => {
      const { date, month, year } = item
      const today = shortFormat(new Date())
      const itemDate = shortFormat(new Date(year, month, date))

      return {
        date,
        fullDate: new Date(year, month, date),
        day: weekDays[index].slice(0,1),
        id: weekDays[index],
        today: today === itemDate
      }
    })
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
    workingDays
  }
}


export {
  datesOfWeek,
  dateObject, 
  repetitionCalc
}

















