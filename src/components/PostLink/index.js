import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from '../../scss/components/_postlink.module.scss'

const PostLink = ({ post, image }) => (
  <li>
    <article>
      <Link to={post.frontmatter.path} className={styles.post}>
        <div className={styles.postObject}>
          <div className={styles.postObjectText}>Read More</div>
          <Img
            fluid={image.childImageSharp.fluid}
            objectFit="cover"
          />
        </div>
        <div className={styles.postBody}>
          <div className={styles.postMetadata}>
            <time className={styles.postTime}>{post.frontmatter.date}</time><span className={styles.postCategory}>{post.frontmatter.category}</span>
          </div>
          <h1 className={styles.postTitle}>{post.frontmatter.title}</h1>
        </div>
      </Link>
    </article>
  </li>
)

export default PostLink