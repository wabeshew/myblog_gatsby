import React from "react"
import styles from'../../scss/components/_snslink.module.scss'

const SnsLink = () => {
    return (
        <ul className={styles.lSnslink}>
            <li><a href="https://twitter.com/wabeshew" className={`${styles.snslink} ${styles.snslinkTwitter}`} rel="noopener noreferrer" target="_blank" aria-label="twitter"><i className={`${styles.snslinkIcon} ${styles.genericon} ${styles.genericonTwitter}`}></i></a></li>
            <li><a href="https://www.facebook.com/ziro.kusakabe" className={`${styles.snslink} ${styles.snslinkFacebook}`} rel="noopener noreferrer" target="_blank" aria-label="facebook"><i className={`${styles.snslinkIcon} ${styles.genericon} ${styles.genericonFacebookAlt}`}></i></a></li>
            <li><a href="https://jp.pinterest.com/zirokusakabe/" className={`${styles.snslink} ${styles.snslinkPinterest}`} rel="noopener noreferrer" target="_blank" aria-label="pinterest"><i className={`${styles.snslinkIcon} ${styles.genericon} ${styles.genericonPinterest}`}></i></a></li>
            <li><a href="https://www.youtube.com/user/bloodygunman1219" className={`${styles.snslink} ${styles.snslinkYoutube}`} rel="noopener noreferrer" target="_blank" aria-label="youtube"><i className={`${styles.snslinkIcon} ${styles.genericon} ${styles.genericonYoutube}`}></i></a></li>
        </ul>
    )
}

export default SnsLink