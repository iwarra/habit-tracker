import style from "./footer.module.scss"
import { AiOutlineUser } from "react-icons/ai"
import { IoMdStats } from "react-icons/io"
import { Link } from "react-router-dom"
import FooterContext from "../context/FooterContext"
import { useContext } from "react"

const Footer = () => {
  const { setFooterIcon } = useContext(FooterContext)

  return (
           <footer className={style.footer}>
              <Link className={style.fooLink}>
                <IoMdStats className={style.icon} role='button'/>
              </Link >
              <Link to={`${setFooterIcon().link}`} className={style.fooLink}>
                {setFooterIcon().icon} 
              </Link>
              <Link className={style.fooLink}>
                <AiOutlineUser className={style.icon} role='button'/>
              </Link>
           </footer>
         )
};

export default Footer;