import './index.css';
import Navbar    from './components/Navbar';
import Ticker    from './components/Ticker';
import Hero      from './components/Hero';
import Projects  from './components/Projects';
import About     from './components/About';
import Skills    from './components/Skills';
import Education from './components/Education';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Ticker />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
