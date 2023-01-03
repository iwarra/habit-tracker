const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//Any use for number of the week?
/* function getWeek() {
  const today = new Date();
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
} */

function getDate() {
  const current = new Date()

  function numberOfDay() {
    return current.getDay()
  }

  function nameOfDay() {
    return weekDays[current.getDay()]
  }

  function date() {
    return current.getDate()
  }

  function month() {
    return months[current.getMonth()]
  }

  return {
    numberOfDay,
    nameOfDay,
    date,
    month,
  }
}

function datesOfCurrentWeek() {
  const current = new Date()
  let startingPoint = new Date().setDate(current.getDate() - current.getDay())
  return new Array(7)
    .fill()
    .map((_, slot) => {
      const nextDate = new Date(startingPoint).getDate() + slot
      const date = current.setDate(nextDate)
      return new Date(date).getDate()
    })
    .map((item, index) => {
      return {
        date: item,
        day: weekDays[index].slice(0,1),
        id: weekDays[index],
        today: new Date().getDate() === item
      }
    })
}

export {
  getDate,
  datesOfCurrentWeek,
}