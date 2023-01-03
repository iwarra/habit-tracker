import style from "./footer.module.scss"
import {AiOutlineUser} from 'react-icons/ai'
import {IoMdAddCircle, IoMdStats} from 'react-icons/io'

const Footer = () => {
  return (
           <footer className={style.footer}>
             <IoMdStats className={style.icon} role='button'/>
             <IoMdAddCircle className={style.addIcon} role='button'/>
             <AiOutlineUser className={style.icon} role='button'/>
           </footer>
         )
};

export default Footer;
