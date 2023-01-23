import { createContext } from "react"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { IoMdAddCircle } from "react-icons/io"
import { useLocation } from "react-router-dom"
import style from "../compontents/footer.module.scss"

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
    <FooterContext.Provider value={{ setFooterIcon }}>
      {children}
    </FooterContext.Provider>
  )
  
}

export default FooterContext