import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typed from 'typed.js';

const CenteredDiv = styled.div`
  text-align: center;
`;

const TypedGreeting = styled.span`
  font-size: ${rhythm(1)};
  text-align: center;
`;

const Hompage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    let typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 40,
      showCursor: false,
    });
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy" />

      <CenteredDiv>
        <div>
          <div id="typed-strings">
            <p>👋 Hi! I'm Mike Murphy</p>
          </div>
          <TypedGreeting id="typed"></TypedGreeting>
        </div>

        <div>
          <Link to={`/blog`}>Blog</Link>
          {' | '}
          <Link to={`/resume`}>Resume</Link>
          {' | '}
          <Link to={`/portfolio`}>Portfolio</Link>
        </div>

        <h3>Contact Me</h3>
        <div>
          <a href="mailto:mikeymurph77@gmail.com">Email</a>
          {' | '}
          <a href="https://twitter.com/mikeymurph77">Twitter</a>
        </div>
      </CenteredDiv>

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
