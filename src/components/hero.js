import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { device, primary } from "../styles/globalstyles"
import { Link } from "gatsby"
import Button from "./button"

export const HeroContainer = styled(BackgroundImage)`
  background-color: rgb(211, 211, 211);
  background-blend-mode: multiply;
  background-size: cover;

  @media ${device.mobileS} {
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    object-fit: cover;
    padding: 5%;
    h2,
    h1,
    a {
      color: white;
      font-weight: 300;
      margin-bottom: 15px;
    }
    h2 {
      text-transform: uppercase;
    }
  }
  @media ${device.laptop} {
    height: 100vh;
  }
`

const Hero = ({ image }) => {
  return (
    <HeroContainer fluid={image} backgroundColor={`#040e18`}>
      <h2>Become Lorient</h2>
      <h1>Feel Revitalize, make heads turn back, and live younger.</h1>
      <Button color={primary}>
        <Link to="/">Learn More</Link>
      </Button>
    </HeroContainer>
  )
}

export default Hero
