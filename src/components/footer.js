import React from "react"
import styled from "styled-components"
export const FooterWrapper = styled.section`
  padding: 5%;
  display: flex;
`
const Footer = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Copyright Lorient Skin Care
    </FooterWrapper>
  )
}

export default Footer
