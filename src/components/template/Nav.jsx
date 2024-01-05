import React from 'react'
import '../scss/Nav.scss'
import Logo from "../../images/logo.png"
import { useRef, useEffect } from 'react'

const Nav = () => {
 const menuRef = useRef();
 const iconRef = useRef();
  const handleClick = () => {
    console.log("clicked");
    menuRef.current.classList.toggle("active")
    iconRef.current.classList.toggle("active")
    console.log(menuRef.current);
  }
 
  return (
    <header>
        <section className='header-wrapper'>
        <section className='logo'>
            <img src={Logo} alt="logo" />
        </section>
        <nav className='nav'>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Testimonial</li>
            </ul>
        </nav>
        <section>
            <button>Contact Us</button>
        </section>
        <section className='mobile__menu'>
              
  <label for="menu-toggle" class="menu-icon" ref={iconRef} onClick={handleClick}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </label>

                </section>
        </section>
        <section className='mobile__nav' ref={menuRef}>
        <nav className='menu'>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Testimonial</li>
            </ul>
        </nav>
        <section>
            <button>Contact Us</button>
        </section>
        </section>
    </header>
  )
}

export default Nav