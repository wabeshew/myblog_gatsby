import { Link } from "gatsby"
import React from "react"
import styles from'../../scss/components/_pulldownmenu.module.scss'

const PulldownMenu = ({ siteTitle }) => (
  <div className={styles.pulldown}>
    <input type="checkbox" className={styles.pulldownTrigger} />
    <label className={styles.pulldownBtn}></label>
    <div className={styles.pulldownMenu}>
      <ul className={styles.pulldownMenuitems}>
        <li><Link to="/" className={styles.pulldownMenuitem}>HOME</Link></li>
        <li><Link to="/about/" className={styles.pulldownMenuitem}>ABOUT</Link></li>
      </ul>
    </div>
  </div>
)

export default PulldownMenu