import { createContext, useState } from "react"

const ValidationContext = createContext({})

export const ValidationProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState({
    habitVis: false,
    categoryVis: false
  })

  function inputValidation(inputValue, inputKind) {
    if (!inputValue.trim()) {
      if (inputKind === 'habitVis') setIsVisible((prev) => ({...prev, habitVis: true})) 
      else if (inputKind === 'categoryVis') setIsVisible((prev) => ({...prev, categoryVis: true}))

      return true
    }
    else return false
  }

  return (
    <ValidationContext.Provider value={{ inputValidation, isVisible, setIsVisible }}>
      {children}
    </ValidationContext.Provider>
  )

}

export default ValidationContext