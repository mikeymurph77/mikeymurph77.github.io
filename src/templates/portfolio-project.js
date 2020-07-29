import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const ProjectHeaderImage = styled.img`
  max-height: ${rhythm(7)};
`;

const ProjectLink = styled.a`
  font-size: ${rhythm(3 / 4)}
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin-top: ${rhythm(1)}
`;

const PortfolioProjectTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.featuredImage}
      />
      <article>
        <header>
          <center>
            <ProjectHeaderImage src={post.frontmatter.headerImage} alt={post.frontmatter.title}/>
          </center>

          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <ProjectLink href={post.frontmatter.projectLink} target="_blank">Project Link</ProjectLink>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <h2>More Projects</h2>
        <PortfolioGrid>
          {_.map(projects, (project) => (
            <ProjectCard key={project.node.id} project={project}/>
          ))}
        </PortfolioGrid>
        <footer>
        </footer>
      </article>

      <nav>
      </nav>
    </Layout>
  )
}

export default PortfolioProjectTemplate

export const pageQuery = graphql`
  query PortfolioProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(filter: {fields: {slug: {ne: $slug}}, frontmatter: {type: {eq: "project"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            featuredImage
            title
          }
        }
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage
        headerImage
        projectLink
      }
    }
  }
`
