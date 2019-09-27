/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/post/index.js`)
  const categoryTemplate = path.resolve(`src/templates/category/index.js`)
  const topTemplate = path.resolve(`src/templates/top/index.js`)



  const result = await graphql(`
    {
      post: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              writer
              category
            }
          }
        }
      },
      category: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.post.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
      }, // additional data can be passed via context
    })
  })

  createPaginatedPages({
    edges: result.data.post.edges,
    createPage: createPage,
    pageTemplate: topTemplate,
    pageLength: 2, // This is optional and defaults to 10 if not used
    pathPrefix: '', // This is optional and defaults to an empty string if not used
    context: {}, // This is optional and defaults to an empty object if not used
  })

  // result.data.category.edges.forEach(({ node }) => {
  //   createPage({
  //     path: `/category/${node.frontmatter.category}`,
  //     component: categoryTemplate,
  //     context: {
  //     }, // additional data can be passed via context
  //   })
  // })
}