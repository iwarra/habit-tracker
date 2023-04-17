import { useState, useContext } from 'react'
import { useHabits } from '../hooks/useHabits'
import { useNavigate } from 'react-router-dom'
import StatsContext from '../context/StatsContext'
import ModalContext from '../context/ModalContext'

export const useAddNew = () => {
  const [newHabit, setNewHabit] = useState({
    id: crypto.randomUUID(),
    name: '',
    checked: false,
    category: 'Uncategorized',
    color: '#eee',
    icon: 'checklist',
    repetition: '',
    monthlyTotal: '',
  })

  const navigate = useNavigate()
  const { addNewHabit } = useHabits()
  const { setHabitsCount } = useContext(StatsContext)
  const { setIsModalOpen } = useContext(ModalContext)

  function handleAddCategory(event) {
    if (event.target != 'button' && event.target.closest('#modalWrap')) return
    setIsModalOpen((prev) => !prev)
  }

  function handleAddHabit() {
    addNewHabit(newHabit)
    setHabitsCount((prev) => prev + 1)
    navigate('/')
  }

  return { handleAddCategory, handleAddHabit, newHabit, setNewHabit }
}
