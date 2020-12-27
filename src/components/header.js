import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { primary } from "../styles/globalstyles"

export const Nav = styled.nav`
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
  background: whitesmoke;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    list-style: none;
    li {
      a {
        font-size: 1.2rem;
        color: ${primary};
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <Nav className="bg-light">
    <h2>{siteTitle}</h2>
    <ul className="text-color-secondary">
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/" className="btn btn-sm btn-secondary text-light">
          Contact
        </Link>
      </li>
    </ul>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
