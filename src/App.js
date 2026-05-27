import './index.css';
import Navbar   from './components/Navbar.jsx';
import Ticker   from './components/Ticker.jsx';
import Hero     from './components/Hero.jsx';
import Wave     from './components/Wave.jsx';
import Projects from './components/Projects.jsx';
import About    from './components/About.jsx';
import Skills   from './components/Skills.jsx';
import Contact  from './components/Contact.jsx';
import Footer   from './components/Footer.jsx';

const BG  = '#eae9dc';
const BG2 = '#F8FAFC';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Ticker />
      <Hero />
      <Wave topColor={BG}  bottomColor={BG2} />
      <Projects />
      <Wave topColor={BG2} bottomColor={BG} flip />
      <About />
      <Wave topColor={BG}  bottomColor={BG2} />
      <Skills />
      <Wave topColor={BG2} bottomColor={BG} flip />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
