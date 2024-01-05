
import React from 'react'
import '../scss/Footer.scss'
import Logo from "../../images/logo.png"

const Footer = () => {
  return (
    <footer>
        <div className='footer-wrapper'>
            <div>
<img src={Logo} alt="logo" />
            </div>
            <div className='footer-wrapper-text'>
                &copy;2024 Insight Studio
            </div>
        </div>
    </footer>
  )
}

export default Footer