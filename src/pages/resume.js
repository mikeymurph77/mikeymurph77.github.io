import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingTitle from "../components/headingTitle"

const SectionTitle = styled.h2`
  margin-bottom: ${rhythm(3 / 4)};
`;

const Divider = styled.hr`
  margin-bottom: ${rhythm(3 / 4)};
`;

const Summary = styled.div`
`;

const JobExperience = styled.div`
`;

const JobTitle = styled.h3`
  margin-top: ${rhythm(3 / 4)};
  margin-bottom: 0;
`;

const JobMetaData = styled.p`
  margin-bottom: ${rhythm(1 / 2)}
`;

const Company = styled.span`
font-weight: bold;
`;

const Timeframe = styled.span`
font-style: italic;
padding-left: 10px;
color: #9c9c9c;
`;

const Description = styled.p`
`;

const SchoolName = styled.h3`
  margin-top: ${rhythm(3 / 4)};
  margin-bottom: 0;
`;

const Degree = styled.p`
  margin-bottom: ${rhythm(1 / 2)}
`;

const TechLogo = styled.img`
  margin: 5px;
`;

const TechLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
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

  const Technologies = () => (
    techDetailArray.map(function(imgDetails, i){
      return (
        <TechLink href={imgDetails[2]} alt={imgDetails[1]} target='_blank' rel="noreferrer"><TechLogo key={i} src={imgDetails[0]} title={imgDetails[1]} /></TechLink>
      )
    })
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mike Murphy | Resume" />
      <Bio />
      <HeadingTitle>Resume</HeadingTitle>

      <SectionTitle>Summary</SectionTitle>
      <Divider/>
      <Summary>
        Experienced Software Engineer with a demonstrated history developing full-stack web applications.
        Forever pursing continuous improvement not only technically but in management and inter-personal skills.<br /><br />
        Doing my best to live by the Golden Rules; <strong><em>Do the right thing</em></strong> and <strong><em>Treat people the way you want to be treated.</em></strong>
      </Summary>


      <SectionTitle>Work Experience</SectionTitle>
      <Divider/>
      <JobExperience>
        <JobTitle>Software Engineer</JobTitle>
        <JobMetaData><Company>Jobcase</Company> <Timeframe>2016 - Present</Timeframe></JobMetaData>
        <Description>
          Working as a Fullstack Software Developer, building a social platform dedicated to empowering and advocating the world's workforce.
            Part of the core team transitioning Jobcase's monolith application to a distributed microservice environment.
            Engineering Lead for cross functional and third-party initiatives building internal and product facing tools and features.
            Scrum lead for core transition team.
            Mentor for junior developers.
        </Description>
      </JobExperience>

      <JobExperience>
        <JobTitle>Software Engineer</JobTitle>
        <JobMetaData><Company>LabCentrix</Company> <Timeframe>2014 - 2016</Timeframe></JobMetaData>
        <Description>
          Worked on a modular Ruby on Rails application utilizing 20+ engines, Javascript, HTML, CSS/SASS, and SQL.
          Worked in groups of 2-5 on critical path development with 1-week sprint cycles.
          Configured backend features utilizing a complex database model structure.
        </Description>
      </JobExperience>

      <SectionTitle>Education</SectionTitle>
      <Divider/>
      <div>
        <SchoolName>UMass Amherst - Isenberg School of Management</SchoolName>
        <Degree>Resource Economics (Managerial Economics in Resource Industries)</Degree>
      </div>

      <div>
        <SchoolName>Metis</SchoolName>
        <Degree>Ruby on Rails Apprentice</Degree>
      </div>

      <SectionTitle>Technologies</SectionTitle>
      <Divider/>
      <center>
        <Technologies />
      </center>
      <center><p>... and much more.</p></center>
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
