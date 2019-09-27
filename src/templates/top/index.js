import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import PostLink from "../../components/PostLink"
import SnsLink from "../../components/SnsLink"
import SubContents from "../../components/SubContents"
import CategoryList from "../../components/CategoryList"
import Pagination from "../../components/Pagination"

import styles from '../../scss/page/_top.module.scss'

const IndexPage = ({ data, pageContext }) => {
  const Posts = pageContext.group
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge, index) => {
      let image = data.allMarkdownRemark.edges.filter(edge => edge.node.id === pageContext.group[index].node.id)[0].node.frontmatter.image
      return <PostLink key={edge.node.id} post={edge.node} image={image}/>
    })
  let categorylist = [...new Set(data.allMarkdownRemark.edges
    .map(edge => edge.node.frontmatter.category))]
  return (
    <Layout>
      <SEO title="top" />
      <div className={styles.lContents}>
        <main className={styles.lContentsMain}>
          <ul className={styles.lPost}>
            {Posts}
          </ul>
          <div className={styles.lPagination}>
            <Pagination pageContext={pageContext} />
          </div>
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

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            writer
            image {
              childImageSharp {
                fluid(maxWidth: 416) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            category
          }
        }
      }
    }
  }
`