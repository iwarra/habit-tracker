import style from "./footer.module.scss"
import { AiOutlineUser } from "react-icons/ai"
import { IoMdAddCircle, IoMdStats } from "react-icons/io"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useState } from "react"

const Footer = () => {
  const path = window.location.pathname
  console.log(path)
  const [backBtn, setBackBtn] = useState()

  return (
           <footer className={style.footer}>
              <Link className={style.fooLink}>
                <IoMdStats className={style.icon} role='button'/>
              </Link >
              <div> {
                (path === '/add' && backBtn) ?
                  <Link to="/" className={style.fooLink}>
                    <BsFillArrowDownCircleFill className={style.backIcon} role='button' onClick={() => setBackBtn(false)}/> 
                  </Link>
                  :
                  <Link to="add" className={style.fooLink}>
                    <IoMdAddCircle className={style.addIcon} role='button' onClick={() => setBackBtn(true)}/>
                  </Link>
               }
              </div>
              <Link className={style.fooLink}>
                <AiOutlineUser className={style.icon} role='button'/>
              </Link>
           </footer>
         )
};

export default Footer;
