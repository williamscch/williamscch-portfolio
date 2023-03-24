import { useState } from 'react';
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

  return (
    <div className={`wrapper ${clicked ? 'no-scroll' : ''}`}>
      <Nav handleClick={handleClick} clicked={clicked} />
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
