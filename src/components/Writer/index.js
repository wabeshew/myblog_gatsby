import React from "react"
import styles from '../../scss/components/_writer.module.scss'

import constants from './constants.js'

const Writer = ({ writer }) => {
  return (
    <div className={styles.writer}>
        <div className={styles.writerObject}><img src="" width="100" height="100" className={styles.writerObjectImg} alt=""/></div>
        <div className={styles.writerBody}>
            <div className={styles.writerBodyTitle}>著者</div>
            <div className={styles.writerBodyName}>{constants[writer].name}</div>
            <p className={styles.writerBodyText}>{constants[writer].profile}</p>
        </div>
    </div>
  )
}

export default Writer