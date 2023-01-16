import style from "../compontents/footer.module.scss"
import { createContext } from "react"
import { IoMdAddCircle } from "react-icons/io"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { useLocation } from "react-router-dom"

const FooterContext = createContext({})

export const FooterProvider =({ children })=> {
  const location = useLocation();

  function setFooterIcon() {
    if (location.pathname === "/") return {
      link: "/add",
      icon: <IoMdAddCircle className={style.addIcon} role="button" />
    }
    if (location.pathname === "/add") return {
      link: "/",
      icon: <BsFillArrowDownCircleFill className={style.backIcon} role="button" />
    }
  }

  return (
    <FooterContext.Provider value={{
       setFooterIcon
    }}>
      {children}
    </FooterContext.Provider>
  )
  
}

export default FooterContext