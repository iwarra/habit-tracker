const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const shortFormat = (date) => new Intl.DateTimeFormat('se-SV', { dateStyle: "short" }).format(date)

//Any use for number of the week?
/* function getWeekNumber() {
  const today = new Date();
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
} */

function getDate() {

  function numberOfDay(date) {
    const current = date ?? new Date()
    return current.getDay()
  }

  function nameOfDay(date) {
    const current = date ?? new Date()
    return weekDays[current.getDay()]
  }

  function date(date) {
    const current = date ?? new Date()
    return current.getDate()
  }

  function month(date) {
    const current = date ?? new Date()
    return months[current.getMonth()]
  }

  return {
    numberOfDay,
    nameOfDay,
    date,
    month,
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


export {
  getDate,
  datesOfWeek,
}

















