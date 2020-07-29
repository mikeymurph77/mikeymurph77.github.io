import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Project = styled.div`
  flex-grow: 1;
  border-radius: 5px;
  background-color: #191919;
  height: 175px;
  position: relative;
  overflow: hidden;
`;

const ProjectLink = styled(Link)`
  color: #fff;
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

const ProjectCard = ({ project }) => {
  const title = project.node.frontmatter.title;
  const image = project.node.frontmatter.featuredImage;
  const slug = project.node.fields.slug;

  return (
    <React.Fragment>
      <Project>
        <ProjectLink to={slug}>
          <ProjectImg src={image} alt={title}/>
        </ProjectLink>
      </Project>
    </React.Fragment>
  )
}

export default ProjectCard
