import React from "react"
import style from "./notFound.module.scss"

const NotFound = () => {
  return (
  <div className={style.wrap}>
    <div className={style.miniWrap}>
      <div className={`${style.blue} ${style.circle}`}></div>
      <div className={`${style.pink} ${style.circle}`}></div>
      <h1>Oops, page not found.</h1>
    </div>
  </div>
  )
}

export default NotFound;
