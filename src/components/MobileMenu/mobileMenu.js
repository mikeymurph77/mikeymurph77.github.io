import React from "react"
import { slide as Menu } from 'react-burger-menu'

import { Link } from "gatsby"

import "./styles.css"

const MobileMenu = () => {

  return (
    <Menu right pageWrapId={ "fooMan" } outerContainerId={ "___gatsby" }>
      <Link to={`/`} className="menu-item">About</Link>
      <Link to={`/blog`} className="menu-item">Blog</Link>
      <Link to={`/resume`} className="menu-item">Resume</Link>
      <Link to={`/portfolio`} className="menu-item">Portfolio</Link>
    </Menu>
  )
}

export default MobileMenu
