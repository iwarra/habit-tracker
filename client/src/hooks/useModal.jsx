import { useState, useContext } from 'react'
import { categories as defaultCategories } from '../mongodb/habits.js'
import ModalContext from '../context/ModalContext.jsx'

export const useModal = () => {
  const { setIsModalOpen } = useContext(ModalContext)

  const [newCategory, setNewCategory] = useState({
    name: '',
    color: '',
    icon: '',
    id: crypto.randomUUID(),
  })

  function addNewCategory(newCat) {
    const allCategories = JSON.parse(localStorage.getItem('Categories')) || defaultCategories
    localStorage.setItem('Categories', JSON.stringify([...allCategories, newCat]))
  }

  function handleAddNew() {
    addNewCategory(newCategory)
    setIsModalOpen((prev) => (prev = !prev))
  }

  return { newCategory, setNewCategory, handleAddNew }
}
