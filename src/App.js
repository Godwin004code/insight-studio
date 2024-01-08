import logo from './logo.svg';
import './App.css';
import Nav from './components/template/Nav';
import Hero from './components/template/Hero';
import About from './components/template/About';
import Projects from './components/template/Projects';
import Contact from './components/template/Contact';
import Footer from './components/template/Footer';
import Testimonial from './components/template/Testimonial';
import Howwework from './components/template/Howwework';
//import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  return (
    <>
    
      <Nav />
      <Hero />
      <About />
      <Howwework />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
