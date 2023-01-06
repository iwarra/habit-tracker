/* import Header from './compontents/Header' */
import Footer from './compontents/Footer'
import Overview from "./compontents/Overview.jsx"
import { useState } from 'react';
import { habits as defaultHabits } from './mongodb/habits'

function App() {
  const [habits, setHabits] = useState(JSON.parse(localStorage.getItem('habitList')) ?? defaultHabits)

  return (
    <>
      <Overview habits={habits}/>
      <Footer setHabits={setHabits}/>
    </>
  )
}

export default App
