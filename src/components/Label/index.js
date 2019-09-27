import React from "react"
import { Link } from "gatsby"
import styles from "../../scss/components/_label.module.scss"

const Label = ({ category }) => (
  <Link to="/" className={styles.label}>
    {category}
  </Link>
)

export default Label
