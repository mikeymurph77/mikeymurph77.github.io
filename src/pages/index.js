import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Hompage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy" />
      <Bio />
      <h1>Site Under Construction</h1>
      <h3>Comming Soon...</h3>

      <Link to={`/blog`}>Blog</Link>
      {' | '}
      <Link to={`/resume`}>Resume</Link>
      {' | '}
      <Link to={`/portfolio`}>Portfolio</Link>
    </Layout>
  )
}

export default Hompage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
