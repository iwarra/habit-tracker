const repetition = {
  daily: {
    number: 30,
    text: "Every day"
  },
  weekly: {
    number: 4,
    text: "Weekly"
  },
  custom: {
    number: "",
    repetition: "",
    text: "",
    days: [],
  }
}

const categories = [
   {
    name: "Health",
    color: "#d6d8f5e4",
    icon: "human",
    id: crypto.randomUUID(),
  },
   {
    name: "Hobbies",
    color: "#f0e1fe",
    icon: "pen",
    id: crypto.randomUUID(),
  },
  {
    name: "Productivity",
    color: "#F8F1AE",
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

const habits = [
  {
    id: crypto.randomUUID(),
    name: "Study programming",
    checked: false,
    category: categories[2].name,
    color: categories[2].color,
    icon: categories[2].icon,
    repetition: repetition.daily.text,
    monthlyTotal: repetition.daily.number,
  },
  {
    id: crypto.randomUUID(),
    name: "Go to gym",
    checked: false,
    category: categories[0].name,
    color: categories[0].color,
    icon: categories[0].icon,
    repetition: repetition.weekly.text,
    monthlyTotal: repetition.weekly.number,
  },
  {
    id: crypto.randomUUID(),
    name: "Read books",
    checked: false,
    category: categories[1].name,
    color: categories[1].color,
    icon: categories[1].icon,
    repetition: repetition.daily.text,
    monthlyTotal: repetition.daily.number,
  }
]



export {
  habits,
  categories
}