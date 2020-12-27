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
      facial: file(relativePath: { eq: "facial6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(data.facial.childImageSharp.fluid)
  return (
    <Layout>
      <SEO title="Lorient | Skin Care Specialist" />
      <Hero image={data.facial.childImageSharp.fluid} />

      <Welcome />
      <Features />
      <Pricing />
      <Testimonials />
    </Layout>
  )
}
export default IndexPage
