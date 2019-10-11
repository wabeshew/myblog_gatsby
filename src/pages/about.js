import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import styles from '../scss/page/_about.module.scss'

const About = () => (
  <Layout>
    <SEO title="about" />
    <div class={`${styles.lContents} ${styles.lContentsSingle}`}>
      <div className={styles.lSection_h1}>
        <section className={styles.section_h1}>
          <div className={styles.section_h1Header}><h1>About</h1></div>
          <div className={styles.section_h1Body}>
            <section className={styles.section_h2}>
              <div className={styles.section_h2Header}><h2>このサイトについて</h2></div>
              <div className={styles.section_h2Body}>
                <p className={styles.section_h2BodyText}>当サイトは、個人的な備忘録を目的として書いているブログです。</p>
                <p className={styles.section_h2BodyText}>ここで公開している記事はあくまで個人的な備忘録として投稿しておりますので、記事を参考にした際に万が一問題や障害が生じた場合でも、当サイトは一切責任を負いません。<br/>自己責任のもとでお願いします。</p>
              </div>
            </section>
            <div className={styles.lSection_h2}>
              <section className={styles.section_h2}>
                <div className={styles.section_h2Header}><h2>サービスやコンテンツ、商品の紹介について</h2></div>
                <div className={styles.section_h2Body}>
                  <p className={styles.section_h2BodyText}>サービスやコンテンツ、商品などの紹介の依頼がありましたら、Twitterを通じてご連絡ください。個人的に興味がある内容であれば当ブログにて是非ご紹介させていただきます。</p>
                </div>
              </section>
            </div>
            <div className={styles.lSection_h2}>
              <section className={styles.section_h2}>
                <div className={styles.section_h2Header}><h2>Google Analyticsについて</h2></div>
                <div className={styles.section_h2Body}>
                  <p className={styles.section_h2BodyText}>当サイトではGoogle Analyticsを利用して訪問者のアクセス情報を収集しております。</p>
                </div>
              </section>
            </div>
            <div className={styles.lSection_h2}>
              <section className={styles.section_h2}>
                <div className={styles.section_h2Header}><h2>アフィリエイトについて</h2></div>
                <div className={styles.section_h2Body}>
                  <p className={styles.section_h2BodyText}>当サイトではGoogle AdSenseやAmazonアソシエイトなどのアフィリエイトプログラムを利用しています。リンク先に関しては当サイトとは一切関係ありませんので、サービスや商品などに関する質問は各サービスや販売店舗へご確認ください。なお、サービスの利用や商品の購入に関するトラブルについては当サイトは一切責任を負いませんのでご了承ください。</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default About