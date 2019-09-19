import React from "react"
import Label from "../../components/Label"

import styles from'../../scss/components/_categorylist.module.scss'

const CategoryList = ({ categorylist }) => {
  const categoryitem = categorylist
    .map(category => <li key={category}><Label category={category} /></li>);

    return (
    <ul className={styles.lCategories}>
      {categoryitem}
    </ul>
  )
}

export default CategoryList