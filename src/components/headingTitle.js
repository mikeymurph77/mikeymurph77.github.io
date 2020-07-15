import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  margin: 0;
`;

const HeadingTitle = ({ children }) => {
  return (
    <Title>{ children }</Title>
  )
}

export default HeadingTitle
