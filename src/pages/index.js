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
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
min-width: 300px;
text-align: center;
`;

const TypedGreeting = styled.span`
  font-size: ${rhythm(1)};
  text-align: center;
`;

const ParticleContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Hompage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

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
                  value: "#b7b7b7"
                },
                links: {
                  color: "#b7b7b7",
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
