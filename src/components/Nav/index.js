import { Link } from "gatsby"
import React from "react"
import styles from'../../scss/components/_nav.module.scss'

const Nav = () => {
  return (
    <ul className={styles.nav_list}>
        <li><Link to="/" className={`${styles.nav_listLink} js-scrollNav`} activeClassName={styles.isActive}>HOME</Link></li>
        <li><Link to="/about/" className={`${styles.nav_listLink} js-scrollNav`} activeClassName={styles.isActive}>ABOUT</Link></li>
    </ul>
  )
}

export default Nav