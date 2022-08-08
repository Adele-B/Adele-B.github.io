import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav__menu">
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