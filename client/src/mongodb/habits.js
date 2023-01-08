const repetition = {
  daily: {
    number: 30,
    text: 'Every day'
  },
  weekly: {
    number: 4,
    text: 'Weekly'
  },
  custom: {
    number: '',
    repetition: '',
    text: '',
    days: [],
  }
}

const categories = {
  health: {
    name: "Health",
    color: "#d6d8f5e4",
    icon: "human"
  },
  hobbies: {
    name: "Hobbies",
    color: "#f0e1fe",
    icon: "pen"
  },
  productivity: {
    name: "Productivity",
    color: "#F8F1AE",
    icon: "clock"
  },
  none: {
    name: '',
    color: '',
    icon: 'checklist'
  }
}

const habits = [
  {
    id: crypto.randomUUID(),
    name: 'Study programming',
    checked: false,
    category: categories.productivity.name,
    color: categories.productivity.color,
    icon: categories.productivity.icon,
    repetition: repetition.daily.text,
    monthlyTotal: repetition.daily.number,
  },
  {
    id: crypto.randomUUID(),
    name: 'Go to gym',
    checked: false,
    category: categories.health.name,
    color: categories.health.color,
    icon: categories.health.icon,
    repetition: repetition.weekly.text,
    monthlyTotal: repetition.weekly.number,
  },
  {
    id: crypto.randomUUID(),
    name: 'Read books',
    checked: false,
    category: categories.hobbies.name,
    color: categories.hobbies.color,
    icon: categories.hobbies.icon,
    repetition: repetition.daily.text,
    monthlyTotal: repetition.daily.number,
  }
]



export {
  habits,
}