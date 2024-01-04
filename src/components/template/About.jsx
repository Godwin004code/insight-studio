import React from 'react'
import AboutImg from "../../images/group-1000015845.png"
import '../scss/About.scss'

const About = () => {
  return (
    <section className='insight-about'>
        <div>
            <img src={AboutImg} alt="About Image" />
        </div>
        <div className='insight-about-text'>
            <h2>About <span>Insight Studio</span></h2>
            <p>Welcome to Insight Studio – Your Gateway to Exceptional Web Development!</p>
            <p>
            At Insight Studio, we're not just another web development agency; we're your strategic partner in transforming digital ideas into stunning, functional, and user-centric web experiences. With a passion for innovation and a commitment to excellence, we take pride in our ability to deliver cutting-edge solutions that drive businesses forward.
            </p>
            <p>
            Our mission is to redefine the digital landscape by crafting immersive web solutions that go beyond aesthetics. We believe in the power of a well-designed website to elevate your brand, engage your audience, and unlock new opportunities for growth.
            </p>
            <p>
            Embark on a journey of digital transformation with Insight Studio. Whether you're a startup looking for a strong online presence or an established business seeking a digital overhaul, we have the skills and the passion to make it happen.
            </p>
        </div>
    </section>
  )
}

export default About