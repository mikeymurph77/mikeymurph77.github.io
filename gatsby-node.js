const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const portfolioProject = path.resolve(`./src/templates/portfolio-project.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                type
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const pageType = post.node.frontmatter.type;
    const commonPages = _.filter(posts, (post) => { return post.node.frontmatter.type === pageType })
    const pagePositionIndex = _.findIndex(commonPages, (page) => {return page.node.id === post.node.id})
    const previous = pagePositionIndex === commonPages.length - 1 ? null : commonPages[pagePositionIndex + 1].node
    const next = pagePositionIndex === 0 ? null : commonPages[pagePositionIndex - 1].node
    let templateComponent;

    switch (pageType) {
      case 'blog':
        templateComponent = blogPost;
        break;
      case 'project':
        templateComponent = portfolioProject;
        break;
      default:
        templateComponent = blogPost;
    }

    createPage({
      path: post.node.fields.slug,
      component: templateComponent,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
