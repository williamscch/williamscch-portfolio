import { useState } from 'react';
import { disableBodyScroll } from 'body-scroll-lock';
import Home from './components/Home';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const App = () => {
  const [clicked, setCLicked] = useState(false);
  const handleClick = () => {
    setCLicked(!clicked);
  };

  const handleBodyScroll = () => {
    const target = document.querySelector('body');
    if (clicked) {
      disableBodyScroll(target);
    }
  };

  return (
    <div className={`wrapper ${clicked ? 'no-scroll' : ''}`}>
      <Nav handleClick={handleClick} handleScroll={handleBodyScroll} clicked={clicked} />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
