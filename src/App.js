import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const App = () => (
  <>
    <Nav />
    <Home />
    <Services />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
  </>
);

export default App;
