import React from "react"
import styled from "styled-components"
import { device, primary, secondary } from "../styles/globalstyles"
import { graphql, useStaticQuery } from "gatsby"
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
  margin: 0;
  flex-direction: column;
  padding: 10%;
  h3 {
    text-transform: uppercase;
  }
  hr {
    width: 50%;
    margin: 15px;
  }
  &:hover {
    background-color: #ffd5c8;
  }
  @media ${device.mobileS} {
    background-color: ${props => (props.id % 2 === 0 ? "#f9a392" : "#231F22")};
    img {
      width: 50px;
      margin-bottom: 3vh;
    }
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
  const data = useStaticQuery(graphql`
    query {
      facial1: file(relativePath: { eq: "woman.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facial2: file(relativePath: { eq: "bamboo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facial3: file(relativePath: { eq: "cream.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facial4: file(relativePath: { eq: "towels.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

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
          <img
            src={data.facial1.childImageSharp.fluid.src}
            alt="facial-icons"
          />
          <h3>Double-Cleansing</h3>
          <hr />
          <p>
            Provides innovative bodywork and geared toward the needs of
            atheletes.
          </p>
        </FeaturedCard>
        <FeaturedCard contrast={true} id={2}>
          <img
            src={data.facial2.childImageSharp.fluid.src}
            alt="facial-icons"
          />
          <h3>Exfoliation</h3>
          <hr />
          <p>Lorem djassd djaskdja eqwio dj jeq dsj qejwq dasjkd dhsaj</p>
        </FeaturedCard>
        <FeaturedCard contrast={true} id={3}>
          <img
            src={data.facial3.childImageSharp.fluid.src}
            alt="facial-icons"
          />
          <h3>Extractions</h3>
          <hr />
          <p>Lorem djassd djaskdja eqwio dj jeq dsj qejwq dasjkd dhsaj</p>
        </FeaturedCard>
        <FeaturedCard contrast={false} id={4}>
          <img
            src={data.facial4.childImageSharp.fluid.src}
            alt="facial-icons"
          />
          <h3>Hand Treament</h3>
          <hr />
          <p>Lorem djassd djaskdja eqwio dj jeq dsj qejwq dasjkd dhsaj</p>
        </FeaturedCard>
      </div>
    </FeaturedGrid>
  )
}

export default Features
