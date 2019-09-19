/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/post/index.js`);
  const categoryTemplate = path.resolve(`src/templates/category/index.js`);


  const result = await graphql(`
    {
      post: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
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
  `);

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
  });

  // result.data.category.edges.forEach(({ node }) => {
  //   createPage({
  //     path: `/category/${node.frontmatter.category}`,
  //     component: categoryTemplate,
  //     context: {
  //     }, // additional data can be passed via context
  //   })
  // });
}