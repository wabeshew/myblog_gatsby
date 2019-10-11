import React from "react"
import { Link } from "gatsby"

import styles from "../../scss/components/_pagination.module.scss"

const Pagination = ({ pageContext }) => {
  const { index, first, last, pageCount, pathPrefix } = pageContext
  const prevUrl = index - 1 === 1 ? '' : (index - 1).toString() + '/'
  const nextUrl = (index + 1).toString() + '/'
  let navlinks = []
  let pageRange = 2
  let showRange = 5
  let start = 1
  let end = pageCount

  if(pageCount > showRange) {
    start = Math.max(index - pageRange, 1)
    end = Math.min(index + pageRange, pageCount)
    if(Math.min(index + pageRange, pageCount) < 5) {
      end = 5
    } else if(pageCount - pageRange < index) {
      start = pageCount - pageRange * 2
    }
  }

  return (
    <ul className={styles.pagination}>
      <li>
        <Link to={`${pathPrefix}/${prevUrl}`} className={first ? `${styles.paginationPrev} ${styles.isHidden}` : `${styles.paginationPrev}`}>Next</Link>
      </li>
      {(() => {
        for (let i = start; i <= end; i++) {
          let linkindex = i.toString()
          navlinks.push(
            <li key={i}>
              <Link to={linkindex === '1' ? `${pathPrefix}/` : `${pathPrefix}/${linkindex}/`} className={styles.paginationPage} activeClassName={styles.isCurrent}>{linkindex}</Link>
            </li>
          )
        }
        return navlinks
      })()}
      <li>
        <Link to={`${pathPrefix}/${nextUrl}`} className={last ? `${styles.paginationNext} ${styles.isHidden}` : `${styles.paginationNext}`}>Prev</Link>
      </li>
    </ul>
  )
}

export default Pagination