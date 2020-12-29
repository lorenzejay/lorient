import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "../components/button"
import Hero from "../components/hero"
import Layout from "../components/layout"
import { device, secondary } from "../styles/globalstyles"

export const ServiceWrapper = styled.section`
  padding: 5%;
  margin-top: 12vh;
  @media ${device.mobileS} {
    ul {
      padding-left: 0;
      margin: 5vh 0;
      li {
        margin-left: 20px;
      }
    }
  }
  @media ${device.laptop} {
    h2 {
      margin: 5vh 0;
    }
  }
`
const Service = context => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "facial4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const { pageContext } = context
  const { id, title, description, benefits } = pageContext
  return (
    <Layout>
      <Hero image={data.facial.childImageSharp.fluid} bigText={title} />
      <ServiceWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {benefits.map((benefit, i) => {
            return <li key={i}>{benefit}</li>
          })}
        </ul>
        <Button color={secondary}>
          <Link to="/contact">Book Now</Link>
        </Button>
      </ServiceWrapper>
    </Layout>
  )
}

export default Service
