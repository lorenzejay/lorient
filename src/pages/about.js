import React from "react"
import styled from "styled-components"
import Hero from "../components/hero"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { device, primary, secondary } from "../styles/globalstyles"

export const AboutWrapper = styled.section`
  padding: 5%;

  width: 100%;
  margin-top: 10vh;
  h2 {
    text-transform: uppercase;
  }
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-space-between;
    h2 {
      font-size: 1.6rem;
    }
    p {
      line-height: 1.7rem;
    }
    ul {
      list-style: none;
      width: 100%;
      float: left;
      margin: 5vh 0;
      li {
        line-height: 2rem;
        &::before {
          content: "•";
          color: red;
          font-weight: bold;
          align-self: flex-start;
          display: inline-block;
        }
      }
    }
  }
`
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "facial7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Hero
        image={data.facial.childImageSharp.fluid}
        bigText="About Lorient"
        forComponent={true}
      />

      <AboutWrapper>
        <h2>
          {" "}
          <span style={{ color: secondary }}>Who</span> we are
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque. Consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore. Lorem Ipsum proin gravida nibh vel velit
          auctor aliquet:
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet incididunt adipisicing</li>
          <li>Lorem ipsum dolor sit amet incididunt adipisicing</li>
          <li>Lorem ipsum dolor sit amet incididunt adipisicing</li>
          <li>Lorem ipsum dolor sit amet incididunt adipisicing</li>
        </ul>
      </AboutWrapper>
    </Layout>
  )
}

export default About
