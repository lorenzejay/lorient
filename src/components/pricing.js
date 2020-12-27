import React from "react"
import styled from "styled-components"
import { device } from "../styles/globalstyles"

export const PricingSection = styled.section`
  margin-bottom: 5vh;
  @media ${device.mobileS} {
    .pricing-title {
      padding: 5%;
      h2 {
        font-weight: 400;
      }
    }
    .pricing-cards-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
  @media ${device.laptop} {
    .pricing-cards-container {
      flex-direction: row;
    }
  }
`
export const PricingCards = styled.div`
  @media ${device.mobileS} {
    padding: 5%;
    .card-title {
      height: 15vh;

      width: 75vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #333;
      gap: 2vh;
      h3 {
        font-size: 1.8rem;
      }
      h3,
      p {
        text-transform: uppercase;
        color: whitesmoke;
      }
    }
    ul {
      list-style: none;
      li {
        padding: 5%;
        text-align: center;
        font-size: 1.2rem;
      }
      li:nth-child(odd) {
        background: #fff1ed;
      }
      li:nth-child(even) {
        background: #ffe6de;
      }
    }
  }
  @media ${device.laptop} {
    .card-title {
      width: 23vw;
    }
  }
`
const Pricing = () => {
  return (
    <PricingSection>
      <div className="pricing-title">
        <h2>Prices</h2>
      </div>
      <div className="pricing-cards-container">
        <PricingCards>
          <div className="card-title">
            <h3>Service 1</h3>
            <p>From $50</p>
          </div>
          <div className="card-services">
            <ul>
              <li>Comes with 1</li>
              <li>Comes with 2</li>
              <li>Comes with 3</li>
            </ul>
          </div>
        </PricingCards>
        <PricingCards>
          <div className="card-title">
            <h3>Service 2</h3>
            <p>From $50</p>
          </div>
          <div className="card-services">
            <ul>
              <li>Comes with 1</li>
              <li>Comes with 2</li>
              <li>Comes with 3</li>
            </ul>
          </div>
        </PricingCards>
        <PricingCards>
          <div className="card-title">
            <h3>Service 3</h3>
            <p>From $50</p>
          </div>
          <div className="card-services">
            <ul>
              <li>Comes with 1</li>
              <li>Comes with 2</li>
              <li>Comes with 3</li>
            </ul>
          </div>
        </PricingCards>
      </div>
    </PricingSection>
  )
}

export default Pricing
