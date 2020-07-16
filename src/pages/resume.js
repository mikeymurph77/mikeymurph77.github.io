import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingTitle from "../components/headingTitle"

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy | Resume" />
      <Bio />
      <HeadingTitle>Resume</HeadingTitle>
      <h1>Site Under Construction</h1>
      <h3>Comming Soon...</h3>
    </Layout>
  )
}

export default Resume

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
