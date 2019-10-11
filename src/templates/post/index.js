import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Writer from "../../components/Writer"
import Label from "../../components/Label"

import styles from '../../scss/templates/_posttemplate.module.scss'

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} description={markdownRemark.excerpt}/>
      <div className={`${styles.lContents} ${styles.lContentsSingle}`}>
        <main className={styles.lEntry}>
          <article className={styles.entry}>
            <div className={styles.entryHeader}>
              <h1 className={styles.entryHeaderTitle}>{frontmatter.title}</h1>
              <time className={styles.entryHeaderTime}>{frontmatter.date}</time>
              <div className={styles.entryHeaderCategory}><Label slug={frontmatter.slug} category={frontmatter.category}/></div>
              <div className={styles.entryHeaderImg}>
                <Img
                  fluid={frontmatter.mainimg.childImageSharp.fluid}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={styles.entryBody} dangerouslySetInnerHTML={{ __html: html }} />
            <div className={styles.entryFooter}>
              <Writer writer={frontmatter.writer} />
            </div>
          </article>
        </main>
      </div>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        writer
        mainimg {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        category
        slug
      }
    }
  }
`