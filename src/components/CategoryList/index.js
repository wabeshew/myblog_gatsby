import React from "react"
import Label from "../../components/Label"

import styles from'../../scss/components/_categorylist.module.scss'

const CategoryList = ({ categorylist }) => {
  const categoryitem = categorylist
    .map(category => <li key={category.node.frontmatter.category}><Label slug={category.node.frontmatter.slug} category={category.node.frontmatter.category} /></li>);

    return (
    <ul className={styles.lCategories}>
      {categoryitem}
    </ul>
  )
}

export default CategoryList