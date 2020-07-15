import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingTitle from "../components/headingTitle"

const Portfolio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy | Resume" />
      <Bio />
      <HeadingTitle>Portfolio</HeadingTitle>
      <h1>Site Under Construction</h1>
      <h3>Comming Soon...</h3>
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
