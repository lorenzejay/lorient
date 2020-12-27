import React from "react"
import styled from "styled-components"
import { device } from "../styles/globalstyles"
import { graphql, useStaticQuery } from "gatsby"
import Button from "./button"
import Image from "./image"
import IMG from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

export const WelcomeContainer = styled.section`
  display: block;
  margin: 10vh 0;
  padding: 0 5%;
  width: 100%;
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${device.mobileS} {
    padding: 0;
    img {
      width: 40%;
    }
    .welcome-text {
      h1,
      h4 {
        font-weight: 700;
        text-transform: uppercase;
      }
      h1 {
        font-size: 2.8rem;
        letter-spacing: 5px;
      }
      h4 {
        font-size: 1.3rem;
      }
      p {
        margin-top: 5vh;
        font-size: 0.95rem;
        text-align: center;
      }
    }
  }
  @media ${device.laptop} {
    img {
      width: 250px;
    }
    .welcome-text {
      h1 {
        font-size: 4rem;
      }
      p {
        width: 75%;
        font-size: 1.1rem;
      }
    }
  }
`
export const HeroContainer = styled(BackgroundImage)`
  @media ${device.mobileS} {
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    object-fit: cover;
    /* padding: 5%; */
    background-size: 100%;

    h2,
    h1,
    a {
      color: #333;
      font-weight: 700;
      margin-bottom: 15px;
    }
    h2 {
      text-transform: uppercase;
    }
  }
  @media ${device.laptop} {
    width: 50%;
    height: auto;
  }
`

const Welcome = () => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "lorientlogo.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  return (
    <WelcomeContainer>
      <div className="welcome-text">
        {/* <HeroContainer
          fluid={data.facial.childImageSharp.fluid}
          objectFit="cover"
        >
          <h1>Welcome</h1>

          <h4>Lorient Skin Care</h4>
        </HeroContainer> */}
        <img src={data.facial.childImageSharp.fluid.src} />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque. Consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore.
        </p>
        <Button color="#FFB1A4">Read More</Button>
      </div>
    </WelcomeContainer>
  )
}

export default Welcome
