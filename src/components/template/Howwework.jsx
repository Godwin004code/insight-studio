import React from 'react'
import Avatar from '../../images/project1.png';
import '../scss/Howwework.scss'

const Howwework = () => {
  return (
    <div className='testimonial-container'>
        <h2>How we <span>work</span></h2>
        <section className='testimonial-container-flex'>
            <div className='testimonial-container-flex-single howwework'>
                <div className='avatar'>
                  <h1>01</h1>
                
                </div>
              
               <h3>Meeting</h3>
                <p>When you contact us, we schedule a 1 hour meeting to discuss your project.</p>
                <span></span>
                
                <h4>
                    <a href="#">Contact us</a>
                </h4>
              
            </div>
            <div className='testimonial-container-flex-single howwework'>
                <div className='avatar'>
                 <h1>02</h1>
                 
                </div>
                <h3>Development</h3>
                <p>After the meeting, we start development as soon as possible.</p>
                <span></span>
                
                <h4>
                    <a href="#">Contact us</a>
                </h4>
            </div>
            <div className='testimonial-container-flex-single howwework'>
                <div className='avatar'>
                  
                  <h1>03</h1>

                </div>
                <h3>Deliver</h3>
                <p>We give you update on your project and deliver when you are satisfied with what we have done.</p>
                <span></span>
                
                <h4>
                    <a href="#">Contact us</a>
                </h4>
            </div>
            
        </section>
    </div>
  )
}

export default Howwework