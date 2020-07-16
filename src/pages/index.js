import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typed from 'typed.js';

const TypedParticleWrapper = styled.div`
position: relative;
height: 300px;
`;

const TypedContainer = styled.div`
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
min-width: 300px;
text-align: center;
`;

const TypedGreeting = styled.span`
  font-size: ${rhythm(1)};
  text-align: center;
`;

const HomepageNavContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  text-align: center;
  z-index: 1;
`;

const HomepageNavLink = styled.h3`
  display: inline-block;
`;

const Hompage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  useEffect(() => {
    new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      startDelay: 10,
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      smartBackspace: false
    });
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy" />

      <TypedParticleWrapper>
        <TypedContainer id="typed-container">
          <div id="typed-strings">
            <p><span role="img" aria-label="Hand waving emoji">👋</span> Hi! I'm Mike...</p>
            <p>I'm a Web Developer</p>
            <p>Based in Boston, MA</p>
          </div>
          <TypedGreeting id="typed"></TypedGreeting>
        </TypedContainer>

        <HomepageNavContainer>
          <HomepageNavLink><Link to={`/blog`}>Blog</Link></HomepageNavLink>
          {'  |  '}
          <HomepageNavLink><Link to={`/resume`}>Resume</Link></HomepageNavLink>
          {'  |  '}
          <HomepageNavLink><Link to={`/portfolio`}>Portfolio</Link></HomepageNavLink>
        </HomepageNavContainer>
      </TypedParticleWrapper>
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
