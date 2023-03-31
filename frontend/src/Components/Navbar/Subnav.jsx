import styles from "./Subnav.module.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import DATA from "./navbardata.json"


export const Subnav = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [selectedData, setSelectedData] = useState({});
  return (
    <>
        <div className={styles.subnav} >
            {DATA.map((el, ind) => {
                return <div key={ind} className={styles.subItem} onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => {setShowSubMenu(true); setSelectedData(el)}}>{el.name}</div>
            })}
        </div>
        {showSubMenu && <div className={styles.subsubnav} onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => {setShowSubMenu(true)}}>
            {selectedData?.items.map((el, ind) => {return <div style={{display: "flex", flexDirection: "column", padding: "20px"}} className={ind %2 !=0 ? styles.submenu: ""} ><div className={styles.submenuHead}>{el.subname}</div> <div style={{display: "flex", flexDirection: "column", textAlign: "left", gap: "10px"}}>{el.subitems.map((subel, subelInd) => {
                return <Link to={"/products"}><div>{subel.item}</div></Link>
            })}</div></div>}) }
        </div>}
    </>
  )
}