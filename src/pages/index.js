import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

import Particles from 'react-particles-js';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typed from 'typed.js';

const CenteredDiv = styled.div`
  text-align: center;
`;

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

const ParticleContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const TechLogo = styled.img`
  margin: 5px;
`;

const TechLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Hompage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const techDetailArray = [
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756212/gatsby-personal-site/technologies/react_m0etj0.png', 'React', 'https://reactjs.org/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756211/gatsby-personal-site/technologies/redux_xtheqb.png', 'Redux', 'https://redux.js.org/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756212/gatsby-personal-site/technologies/nodejs_tcs96c.png', 'Node', 'https://nodejs.org/en/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756211/gatsby-personal-site/technologies/java_ohjtsy.png', 'Java', 'https://www.java.com/en/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756211/gatsby-personal-site/technologies/spring_ura0gb.png', 'Spring', 'https://spring.io/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756212/gatsby-personal-site/technologies/ruby_zk1cwd.png', 'Ruby', 'https://www.ruby-lang.org/en/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756212/gatsby-personal-site/technologies/deno_bmshyf.png', 'Deno', 'https://deno.land/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756211/gatsby-personal-site/technologies/graphql_akku67.png', 'GraphQL', 'https://graphql.org/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756211/gatsby-personal-site/technologies/typescript_imuwe9.png', 'TypeScript', 'https://www.typescriptlang.org/'],
    ['https://res.cloudinary.com/dtghgjg3i/image/upload/v1594756212/gatsby-personal-site/technologies/gatsby_boxdxk.png', 'Gatsby', 'https://www.gatsbyjs.org/'],
  ]


  useEffect(() => {
    let typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      startDelay: 50,
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      smartBackspace: false
    });
  }, []);

  const Technologies = () => (
    techDetailArray.map(function(imgDetails, i){
      return (
        <TechLink href={imgDetails[2]} alt={imgDetails[1]} target='_blank'><TechLogo key={i} src={imgDetails[0]} title={imgDetails[1]} /></TechLink>
      )
    })
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy" />

      <TypedParticleWrapper>
        <TypedContainer id="typed-container">
          <div id="typed-strings">
            <p>👋 Hi! I'm Mike...</p>
            <p>I'm a Web Developer</p>
            <p>Based in Boston, MA</p>
            <p>I enjoy <strong>Music</strong></p>
            <p>I enjoy <strong>Running</strong></p>
            <p>I enjoy ... <strong>Beer</strong></p>
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

        <ParticleContainer>
          <Particles
            params={{
              fpsLimit: 60,
              backgroundMask: {
                enable: false,
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onDiv: {
                    enable: true,
                    elementId: "typed-container",
                    mode: "repulse",
                    type: "rectangle",
                  },
                  resize: true
                }
              },
              particles: {
                color: {
                  value: "#dadada"
                },
                links: {
                  color: "#dadada",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1
                },
                collisions: {
                  enable: true
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 4,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 1800
                  },
                  value: 250
                },
                opacity: {
                  value: 0.5
                },
                shape: {
                  type: "polygon"
                },
                size: {
                  random: true,
                  value: 3
                }
              },
              detectRetina: true
            }}
          />
        </ParticleContainer>
      </TypedParticleWrapper>

      <CenteredDiv>
        <h4>Currently Working With</h4>
        <Technologies />
        <p>... and much more</p>
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
