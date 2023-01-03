const frequency = {
  daily: {
    amount: 30,
    text: 'Every day'
  },
  weekly: {
    amount: 7,
    text: 'Weekly'
  }
}

const categories = {
  health: {
    name: "Health",
    color: "#8CD2E8",
    icon: "icon"
  }
}

const habits = [
  {
    id: crypto.randomUUID(),
    name: 'Drink water',
    checked: false,
    category: categories.health,
    frequency: frequency.daily.text,
    amount: frequency.daily.amount,
  },
  {
    id: crypto.randomUUID(),
    name: 'Go to gym',
    checked: false,
    category: ' ',
    frequency: frequency.weekly.text,
    amount: frequency.weekly.amount,
  },
  {
    id: crypto.randomUUID(),
    name: 'Read books',
    checked: false,
    category: categories.health,
    frequency: frequency.daily.text,
    amount: frequency.daily.amount,
  }
]



export {
  habits,
}