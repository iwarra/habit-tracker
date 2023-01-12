import style from "./footer.module.scss"
import {AiOutlineUser} from "react-icons/ai"
import {IoMdAddCircle, IoMdStats} from "react-icons/io"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
           <footer className={style.footer}>
              <Link className={style.fooLink}>
                <IoMdStats className={style.icon} role='button'/>
              </Link >
              <Link to="add" className={style.fooLink}>
                <IoMdAddCircle className={style.addIcon} role='button'/>
              </Link>
              <Link className={style.fooLink}>
                <AiOutlineUser className={style.icon} role='button'/>
              </Link>
           </footer>
         )
};

export default Footer;
