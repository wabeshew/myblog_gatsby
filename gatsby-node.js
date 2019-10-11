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
              slug
            }
          }
        }
      },
      category: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___category}) {
        group(field: frontmatter___category) {
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
                slug
              }
            }
          }
        }
        edges {
          node {
            frontmatter {
              category
              slug
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

  result.data.category.group.forEach(( edges ) => {
    createPaginatedPages({
      edges: edges['edges'],
      createPage: createPage,
      pageTemplate: categoryTemplate,
      pageLength: 2, // This is optional and defaults to 10 if not used
      pathPrefix: `/category/${edges['edges'][0].node.frontmatter.slug}`,
      buildPath: (index, pathPrefix) => {
        return index > 1 ? `${pathPrefix}/${index}/` : `${pathPrefix}/`
      },
      context: {
        category: edges['edges'][0].node.frontmatter.category
      }, // This is optional and defaults to an empty object if not used
    })
  })

  createPaginatedPages({
    edges: result.data.post.edges,
    createPage: createPage,
    pageTemplate: topTemplate,
    pageLength: 4, // This is optional and defaults to 10 if not used
    pathPrefix: '', // This is optional and defaults to an empty string if not used
    context: {}, // This is optional and defaults to an empty object if not used
  })
}