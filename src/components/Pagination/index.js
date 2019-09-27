import React from "react"
import { Link } from "gatsby"

import styles from "../../scss/components/_pagination.module.scss"

const Pagination = ({ pageContext }) => {
  const { index, first, last, pageCount } = pageContext
  const prevUrl = index - 1 === 1 ? '/' : '/' + (index - 1).toString()
  const nextUrl = '/' + (index + 1).toString()
  let navlinks = []
  let count = pageCount < 5 ? pageCount : 5
  let start = index - 1 > pageCount - 5 && pageCount - 5 > 0 ? pageCount - 5 : index - 1
  return (
    <ul className={styles.pagination}>
      <li>
        <Link to={prevUrl} className={first ? `${styles.paginationPrev} ${styles.isHidden}` : `${styles.paginationPrev}`}>Next</Link>
      </li>
      {(() => {
        for (let i = 0 + start; i < count + start; i++) {
          console.log(count)
          console.log(start)
          let linkindex = (i + 1).toString()
          navlinks.push(
            <li key={i}>
              <Link to={linkindex === '1' ? '/' : '/' + linkindex} className={styles.paginationPage} activeClassName={styles.isCurrent}>{linkindex}</Link>
            </li>
          )
        }
        return navlinks
      })()}
      <li>
        <Link to={nextUrl} className={last ? `${styles.paginationNext} ${styles.isHidden}` : `${styles.paginationNext}`}>Prev</Link>
      </li>
    </ul>
  )
}

export default Pagination