import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

function NavItem({ href, text }) {
  const location = useLocation();
  const isActive = location.pathname === href



  return (
    <li className="nav__list">
      <Link
        className={
          isActive ? "nav__item--active" : "nav__item"
        }
        to={href}>
        {text}
      </Link>
    </li>
  )
}

function Navigation() {
  const [navOpen, setNavOpen] = useState(false)

  function handleToggle() {
    setNavOpen(prev => !prev)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <button className='nav__button' onClick={handleToggle}>{navOpen ?
          <MdClose style={{ color: "#3e3d3d", width: "30px", height: "30px" }} />
          :
          <FiMenu style={{ color: "#000000", width: "30px", height: "30px" }} />}
        </button>
        <ul className={`nav__menu ${navOpen ? "nav__menu--open" : "nav__menu--closed"}`}>
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/experience" text="Experience" />
          <NavItem href="/work" text="Work" />
          <NavItem href="/skills" text="Skills" />
          <NavItem href="/contact" text="Contact" />
        </ul>

      </nav>
    </header>
  )
}

export default Navigation;