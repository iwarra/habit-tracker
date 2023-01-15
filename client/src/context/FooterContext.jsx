import { useState, createContext } from "react"
import { IoMdAddCircle, IoMdStats } from "react-icons/io"
const FooterContext = createContext({})
import style from "../compontents/footer.module.scss"
import { BsFillArrowDownCircleFill } from "react-icons/bs"

export const FooterProvider =({ children })=> {
  const [page, setPage] = useState("home")

  function setFooterIcon() {
    if (page === "home") return {
      link: "/add",
      icon: <IoMdAddCircle className={style.addIcon} role="button" />
    }
    if (page === "addHabit") return {
      link: "/",
      icon: <BsFillArrowDownCircleFill className={style.backIcon} role="button" />
    }
  }


  return (
    <FooterContext.Provider value={{
      page, setPage, setFooterIcon
    }}>
      {children}
    </FooterContext.Provider>
  )
  
}

export default FooterContext