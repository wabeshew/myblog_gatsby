import React from "react"
import styles from "../scss/page/_404.module.scss"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import NotFoundSVG from "../images/404.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={`${styles.lContents} ${styles.lContentsSingle}`}>
      <div className={styles.lNotfound}>
        <div className={styles.notfound}>
          <div className={styles.notfoundTitle}>
            <h1>ページが見つかりません！</h1>
          </div>
          <div className={styles.notfoundImg}>
            <img src={NotFoundSVG} width="280" height="280" alt="" />
          </div>
          <div className={styles.notfoundSubtitle}>
            <h2>404 NOT FOUND</h2>
          </div>
          <p className={styles.notfoundText}>
            お探しのページは存在しないURL または
            削除されたページの為見つかりませんでした。
            <a href="/">トップページ</a>へお戻りください。
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
