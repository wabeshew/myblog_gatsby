import React from "react"
import styles from'../../scss/components/_subcontents.module.scss'

const SubContents = ({ children, title }) => {
    return (
        <section>
            <div className={styles.sub_contents}>
                <h1 className={styles.sub_contentsHeader}>{title}</h1>
                <div className={styles.sub_contentsBody}>
                    { children }
                </div>
            </div>
        </section>
    )
}

export default SubContents