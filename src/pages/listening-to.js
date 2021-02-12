import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingTitle from "../components/headingTitle"
import SpotifyTopArtists from "../components/spotifyTopArtists"

const ListeningTo = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy | Listening To" />
      <HeadingTitle>Currently Listening To</HeadingTitle>

      <SpotifyTopArtists/>
    </Layout>
  )
}

export default ListeningTo

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
