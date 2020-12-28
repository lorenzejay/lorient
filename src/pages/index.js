import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { device } from "../styles/globalstyles"
import Welcome from "../components/welcome"
import Testimonials from "../components/testimonials"
import Pricing from "../components/pricing"
import Button from "../components/button"

export const HomePageContentPadding = styled.section`
  @media ${device.laptop} {
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "facial5.jpg" }) {
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
      <SEO title="L'ORIENT | Skin Care Specialist" />
      <Hero
        image={data.facial.childImageSharp.fluid}
        bigText="L'orient"
        smallText="Keeping your skin healthy, youthful and glowing."
        buttonLink="/about"
        buttonText="Learn More"
      />
      {/* <h1>Become Lorient</h1>
        <h4>Feel Revitalize, make heads turn back, and live younger.</h4>
        <Button color={primary}>
          <Link to="/">Learn More</Link>
        </Button>
      </Hero> */}

      <Welcome />
      <Features />
      <Pricing />
      <Testimonials />
    </Layout>
  )
}
export default IndexPage
