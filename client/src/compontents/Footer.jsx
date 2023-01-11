import style from "./footer.module.scss"
import {AiOutlineUser} from "react-icons/ai"
import {IoMdAddCircle, IoMdStats} from "react-icons/io"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
           <footer className={style.footer}>
            <Link>
              <IoMdStats className={style.icon} role='button'/>
            </Link>
            <Link to="add">
              <IoMdAddCircle className={style.addIcon} role='button'/>
            </Link>
            <Link>
              <AiOutlineUser className={style.icon} role='button'/>
            </Link>
           </footer>
         )
};

export default Footer;
