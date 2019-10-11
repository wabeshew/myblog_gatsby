import React from "react"
import { Link } from "gatsby"
import styles from "../../scss/components/_label.module.scss"

const Label = ({ slug, category }) => (
  <Link to={`/category/${slug}/`} className={styles.label}>
    {category}
  </Link>
)

export default Label
