import React from 'react'
import '../scss/Nav.scss'
import Logo from "../../images/logo.png"

const Nav = () => {
  return (
    <header>
        <section className='header-wrapper'>
        <section className='logo'>
            <img src={Logo} alt="logo" />
        </section>
        <nav>
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