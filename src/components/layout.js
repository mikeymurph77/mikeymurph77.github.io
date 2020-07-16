import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography";
import styled from "styled-components";
import { MobileView, isMobile } from "react-device-detect";

import MobileMenu from "./MobileMenu/mobileMenu";

import ThinLogo from "../srcAssets/mike-murphy-logo-thin.svg";

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

const StyledLink = styled(Link)`
  test-decoration: none;
  color: #fff;
`;

const LogoThin = styled(ThinLogo)`
  height: 90px;
  width: auto;
`;

const LogoAvatarWrapper = styled.div`
  text-align: center;
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
      <LogoAvatarWrapper>
        <img src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1594836924/gatsby-personal-site/mike-murphy-logo-avatar-300_kwsai3.png" alt="Mike Murphy" />
      </LogoAvatarWrapper>
    )
  } else {
    header = (
      <nav>
        <NavList>
          <Logo>
            <StyledLink to={`/`}><LogoThin /></StyledLink>
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
