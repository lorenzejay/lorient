import React from "react"
import styled from "styled-components"
import { device, primary } from "../styles/globalstyles"

export const FeaturedGrid = styled.section`
  width: 100%;

  margin: 5vh 0;
  .featured-head {
    align-self: flex-start;
    padding: 0 5%;
    margin: 5vh 0;
    h2,
    p {
      font-weight: 400;
      text-align: left;
    }
    h2 {
      color: ${primary};
      text-transform: uppercase;
      letter-spacing: 5px;
      span {
        color: #333;
      }
    }
  }
  @media ${device.mobileS} {
    .featured-card-container {
      display: flex;
      flex-direction: column;
    }
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-around;

    h2 {
      margin-top: 25vh;
      font-size: 2.2rem;
    }
    .featured-card-container {
      display: grid;

      grid-template-columns: repeat(2, 400px);
    }
  }
`

export const FeaturedCard = styled.div`
  width: 100%;
  height: 40vh;
  background-color: white;
  display: flex;
  margin-top: 10vh;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  padding: 10%;
  h3 {
    text-transform: uppercase;
  }
  hr {
    width: 50%;
  }
  &:hover {
    background-color: #ffd5c8;
  }
  @media ${device.mobileS} {
    background-color: ${props => (props.id % 2 === 0 ? "#f9a392" : "#231F22")};

    h3,
    p {
      color: ${props => (props.id % 2 === 0 ? "#333" : "whitesmoke")};
    }
  }
  @media ${device.laptop} {
    background-color: ${props =>
      props.contrast == true ? "#f9a392" : "#231F22"} !important;
    width: 400px;
    height: 330px;
    padding: 0 2%;
    hr {
      width: 85%;
    }
    h3,
    p {
      color: ${props => (props.contrast == true ? "#333" : "whitesmoke")};
    }

    p {
      width: 85%;
    }
  }
`

const Features = () => {
  return (
    <FeaturedGrid>
      <div className="featured-head">
        <h2>
          What we <span>Do</span>
        </h2>
        <p>The Best Services</p>
      </div>

      <div className="featured-card-container">
        <FeaturedCard contrast={false} id={1}>
          <h3>Facial</h3>
          <hr />
          <p>
            Provides innovative bodywork and geared toward the needs of
            atheletes.
          </p>
        </FeaturedCard>
        <FeaturedCard contrast={true} id={2}>
          <h3>Back Treatment</h3>
          <hr />
          <p>Lorem djassd djaskdja eqwio dj jeq dsj qejwq dasjkd dhsaj</p>
        </FeaturedCard>
        <FeaturedCard contrast={true} id={3}>
          <h3>Hand Treatment</h3>
          <hr />
          <p>Lorem djassd djaskdja eqwio dj jeq dsj qejwq dasjkd dhsaj</p>
        </FeaturedCard>
        <FeaturedCard contrast={false} id={4}>
          <h3>Eyebrows</h3>
          <hr />
          <p>Lorem djassd djaskdja eqwio dj jeq dsj qejwq dasjkd dhsaj</p>
        </FeaturedCard>
      </div>
    </FeaturedGrid>
  )
}

export default Features
