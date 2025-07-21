import { createContext } from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { IoMdHome, IoMdAddCircle } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import style from '../components/footer.module.scss'

const FooterContext = createContext({})

export const FooterProvider = ({ children }) => {
  const location = useLocation()

  function setFooterIcon() {
    if (location.pathname === '/')
      return {
        link: '/add',
        icon: <IoMdAddCircle className={style.centralIconAdd} role="button" />,
      }
    if (location.pathname === '/add')
      return {
        link: '/',
        icon: <BsFillArrowDownCircleFill className={style.centralIconBack} role="button" />,
      }
    else
      return {
        link: '/',
        icon: <IoMdHome className={style.centralIconHome} role="button" />,
      }
  }

  return <FooterContext.Provider value={{ setFooterIcon }}>{children}</FooterContext.Provider>
}

export default FooterContext
