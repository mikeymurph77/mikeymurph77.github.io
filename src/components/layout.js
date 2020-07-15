import React, { Fragment } from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography";
import styled from "styled-components";
import { MobileView, isMobile } from "react-device-detect";

import MobileMenu from "./MobileMenu/mobileMenu";

const NavList = styled.ul`
  margin-left: 0px;

  @media screen and (min-width: 601px) {
    display: flex;
    text-align: left;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Logo = styled.li`
  list-style-type: none;

  @media screen and (min-width: 601px) {
    flex: 1;
  }
`;

const NavItem = styled.li`
  list-style-type: none;

  @media screen and (min-width: 601px) {
    margin-left: 15px;
  }
`;

const HeaderNavLinks = styled.div`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  test-decoration: none;
  color: #fff;
`;

const Footer = styled.footer`
  margin-top: ${rhythm(1)};
  text-align: center;
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <img src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1594746304/gatsby-personal-site/mike-murphy-logo-avatar-1_uoc8ax.png" alt="Mike Murphy" />
    )
  } else {
    header = (
      <nav>
        <NavList>
          <Logo>
            <StyledLink to={`/`}><img src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1594762701/gatsby-personal-site/mike-murphy-logo-thin-mobile_t0duep.png" alt="Mike Murphy" /></StyledLink>
          </Logo>
          {!isMobile && (
            <React.Fragment>
              <NavItem><Link to={`/`}>About</Link></NavItem>
              <NavItem><Link to={`/blog`}>Blog</Link></NavItem>
              <NavItem><Link to={`/resume`}>Resume</Link></NavItem>
              <NavItem><Link to={`/portfolio`}>Portfolio</Link></NavItem>
            </React.Fragment>
          )}
        </NavList>
      </nav>
    )
  }
  return (
    <React.Fragment>
      <MobileView>
        <MobileMenu />
      </MobileView>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
        id="fooMan"
      >
        <header>{header}</header>
        <main>{children}</main>
        <Footer>
          <div>
            <a href='https://twitter.com/mikeymurph77' alt='twitter'>Twitter</a>
            {` | `}
            <a href='https://www.linkedin.com/in/michaelmmurphy/' alt='twitter'>LinkedIn</a>
            {` | `}
            <a href='mailto:mikemurphy@hey.com' alt='twitter'>Email</a>
          </div>
          © {new Date().getFullYear()}, Mike Murphy
        </Footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
