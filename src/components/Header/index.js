import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "../../scss/components/_header.module.scss"

import Nav from "../Nav"
import PulldownMenu from "../PullDownMenu"

import LogoSVG from "../../images/logo.svg"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <h1 className={styles.headerLogo}>
        <Link to="/">
          <img src={LogoSVG} alt="BoxHead" width="40" height="40" />
        </Link>
      </h1>
      <nav className={styles.headerNav}>
        <Nav />
        <PulldownMenu />
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
