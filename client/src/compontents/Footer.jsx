import style from "./footer.module.scss"

const Footer = () => {
  return (
           <footer className={style.footer}>
             <span>Menu</span>
             <span>Timer</span>
             <span>Add</span>
             <span>Account</span>
           </footer>
         )
};

export default Footer;
