import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components";

const SpotifyList = styled.div`
  padding: 1rem;
  background-color: #f7f7f7;
  height: 40rem;
  overflow-y: scroll;
  margin-bottom: 2rem;
`;

const SpotifyItem = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
`;

const SotifyListNumber = styled.span`
  font-size: 0.75rem;
  color: #f7f7f7;
  background-color: #000000;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  line-height: 1.5rem;
  display: inline-block;
  text-align: center;
  margin-right: 0.5rem;
`;

const SpotifyAlbumCover = styled.div`
  width: 5rem;
  height: 4.875rem;
  margin-right: 1rem;
  background-color: #000000;
  overflow: hidden;
`;

export const SpotifyTopArtists = () => {
    const data = useStaticQuery(graphql`
        query SpotifyTopArtistsQuery {
            allSpotifyTopArtist(
                filter: { time_range: { eq: "short_term" } }
                sort: { fields: order }
              ) {
                edges {
                  node {
                    name
                    genres
                    image {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  }
                }
              }
        }
    `)

    return (
        <>
            { data.allSpotifyTopArtist.edges &&
                <div className="spotify__top-artists">
                    <h2>Top 20 Artists</h2>
                    <p>
                        These are my top 20 artists from the past four weeks.
                    </p>
                    <SpotifyList>
                        {data.allSpotifyTopArtist.edges.map((artist, index) =>
                            <SpotifyItem key={index}>
                                <SpotifyAlbumCover>
                                    <Img
                                        fluid={artist.node.image.localFile.childImageSharp.fluid}
                                    />
                                </SpotifyAlbumCover>
                                <h3>
                                    <SotifyListNumber>{index + 1}</SotifyListNumber>
                                    { artist.node.name }
                                </h3>
                            </SpotifyItem>
                        )}
                    </SpotifyList>
                </div>
          }
        </>
    )
}

export default SpotifyTopArtists
