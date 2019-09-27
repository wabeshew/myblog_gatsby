import React from "react"
import { graphql } from "gatsby"
import styles from '../../scss/templates/_posttemplate.module.scss'

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Writer from "../../components/Writer"
import Label from "../../components/Label"

const CategoryTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title="top" />
      <div className={styles.lContents}>
        <main className={styles.lContentsMain}>
          <section>
            <div class="post_section">
              <h1 class="post_section-header"></h1>
              <div class="post_section-body">
                <ul className={styles.lPost}>
                  {Posts}
                </ul>
              </div>
            </div>
          </section>
        </main>
        <aside className={styles.lContentsSub}>
          <SubContents title="Follow me">
            <SnsLink />
          </SubContents>
          <SubContents title="Categories">
            <CategoryList categorylist={categorylist} />
          </SubContents>
        </aside>
      </div>
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        writer
        category
      }
    }
  }
`