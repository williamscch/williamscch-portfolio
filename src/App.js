import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const App = () => (
  <>
    <Nav />
    <Hero />
    <Services />
    <About />
    <Portfolio />
    <Clients />
    <Contact />
  </>
);

export default App;
