import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingTitle from "../components/headingTitle"

const PortfolioGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin-top: ${rhythm(1)}
`;

const Project = styled.div`
  border-radius: 5px;
  background-color: #191919;
  height: 175px;
  position: relative;
  overflow: hidden;
`;

const ProjectImg = styled.img`
  border-radius: 5px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  max-height: 160px;
`;

const Ribbon = styled.p`
  margin: 0;
  padding: 0;
  background: #fbec82;
  color: #433217;
  padding:0.5em 0;
  position: absolute;
  top:0;
  right:0;
  transform: translateX(30%) translateY(0%) rotate(45deg);
  transform-origin: top left;
  z-index: 1;

  :before,
  :after {
    content: '';
    position: absolute;
    top:0;
    margin: 0 -1px; /* tweak */
    width: 100%;
    height: 100%;
    background: #fbec82;
  }
  :before {
    right:100%;
  }

  :after {
    left:100%;
  }
`;

const Portfolio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy | Resume" />
      <HeadingTitle>Portfolio</HeadingTitle>

      <PortfolioGrid>
        <Project>
          <Ribbon>Soon!</Ribbon>
          <Link to={`/thirsty-for-beer`}>
            <ProjectImg src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1594915406/gatsby-personal-site/portfolio/a_kqy1zn.png" alt="Thirsty For Beer"/>
          </Link>
        </Project>
        <Link to={`/resolution-tracker`}>
          <Project>
            <ProjectImg src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1594913952/gatsby-personal-site/portfolio/Resolution_Tracker-02_ki9gc9.png" alt="Resolution Tracker"/>
          </Project>
        </Link>
        <Project>
          <Link to={`/your-volume`}>
            <ProjectImg src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1594914078/gatsby-personal-site/portfolio/Logo_Final_Transparent_01_2_tqyyxd.png" alt="Your Volume"/>
          </Link>
        </Project>
        <Link to={`/mbta-mood`}>
          <Project>
            <ProjectImg src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1594915300/gatsby-personal-site/portfolio/mbta-mood_1_lyirzi.png" alt="MBTA Mood"/>
          </Project>
        </Link>
      </PortfolioGrid>
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
