import React from 'react'
// import './gallery.css'
import {useStaticQuery, graphql} from 'gatsby'
import styled from "styled-components"

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
`;

const ImageItem = styled.div`
  :nth-child(5n) {
    grid-column-end: span 2;
  }
`;

const CloudinaryImg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageGallery = () => {
  const data = useStaticQuery(graphql`query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }`
  )
  const clImages = data.allCloudinaryMedia.edges

  return (
      <div>
        <ImageGrid>
          {clImages.map((image, index) => (
                <ImageItem key={`${index}-cl`}>
                  <CloudinaryImg src={image.node.secure_url} alt={"no alt :("} />
                </ImageItem>
              ))
          }
        </ImageGrid>
      </div>
    )
  }

  export default ImageGallery
