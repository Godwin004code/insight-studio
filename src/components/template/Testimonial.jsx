
import React from 'react'
import '../scss/Testimonial.scss'
import Avatar from '../../images/project1.png'

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
        <h2>My <span>Testimonial</span></h2>
        <section className='testimonial-container-flex'>
            <div className='testimonial-container-flex-single'>
                <div className='avatar'>
                  <img src={Avatar} alt="avatar" />
                  <div className='avatar-quote'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg></div>
                </div>
                <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                <span></span>
                <h3>Evran Singh</h3>
                <h4>CEO</h4>
            </div>
            <div className='testimonial-container-flex-single'>
                <div className='avatar'>
                  <img src={Avatar} alt="avatar" />
                  <div className='avatar-quote'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg></div>
                </div>
                <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                <span></span>
                <h3>Evran Singh</h3>
                <h4>CEO</h4>
            </div>
            <div className='testimonial-container-flex-single'>
                <div className='avatar'>
                  <img src={Avatar} alt="avatar" />
                  <div className='avatar-quote'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg></div>
                </div>
                <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                <span></span>
                <h3>Evran Singh</h3>
                <h4>CEO</h4>
            </div>
            
        </section>
    </div>
  )
}

export default Testimonial