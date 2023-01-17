import { repetitionCalc } from "../utils/timeUtils"

const repetition = [
  {
    name: 'Daily',
    number: repetitionCalc().daysInMonth,
    id: crypto.randomUUID(),
  },
  {
    name: 'Weekly',
    number: repetitionCalc().nrOfWeeks,
    id: crypto.randomUUID(),
  },
  {
    name: 'On weekends',
    number: repetitionCalc().weekendDaysNr,
    id: crypto.randomUUID(),
  },
  {
    name: 'On workdays',
    number: repetitionCalc().workingDays,
    id: crypto.randomUUID(),
  },
 /*  {
    name: 'Custom',
    number: "",
    repetition: "",
    text: "",
    days: [],
    id: crypto.randomUUID(),
  } */
]

const categories = [
   {
    name: "Health",
    color: "#cce6ff",
    icon: "human",
    id: crypto.randomUUID(),
  },
   {
    name: "Hobbies",
    color: "#ffe6e6",
    icon: "pen",
    id: crypto.randomUUID(),
  },
  {
    name: "Productivity",
    color: "#f3e6ff",
    icon: "clock",
    id: crypto.randomUUID(),
  },
  {
    name: "Uncategorized",
    color: "#eee",
    icon: "checklist",
    id: crypto.randomUUID(),
  }
]

const categoryColorOptions = [
  {name: 'Pink', colorCode: '#ffcccb', id: crypto.randomUUID()},
  {name: 'Blue', colorCode: '#b2e7f6', id: crypto.randomUUID()},
  {name: 'Yellow', colorCode: '#f3e627', id: crypto.randomUUID()},
  {name: 'Green', colorCode: '#afe6b3', id: crypto.randomUUID()}
]

const iconOptions = [
  {icon: 'checklist', id: crypto.randomUUID()}, 
  {icon:'clock', id: crypto.randomUUID()}, 
  {icon:'human', id: crypto.randomUUID()}, 
  {icon:'pen', id: crypto.randomUUID()}, 
  {icon:'test', id: crypto.randomUUID()}]

const habits = [
  {
    id: crypto.randomUUID(),
    name: "Study programming",
    checked: false,
    category: categories[2].name,
    color: categories[2].color,
    icon: categories[2].icon,
    repetition: repetition[0].name,
    monthlyTotal: repetition[0].number,
  },
  {
    id: crypto.randomUUID(),
    name: "Go to gym",
    checked: false,
    category: categories[0].name,
    color: categories[0].color,
    icon: categories[0].icon,
    repetition: repetition[1].name,
    monthlyTotal: repetition[1].number,
  },
  {
    id: crypto.randomUUID(),
    name: "Read books",
    checked: false,
    category: categories[1].name,
    color: categories[1].color,
    icon: categories[1].icon,
    repetition: repetition[0].name,
    monthlyTotal: repetition[0].number,
  }
]



export {
  habits,
  categories,
  categoryColorOptions,
  iconOptions,
  repetition
}