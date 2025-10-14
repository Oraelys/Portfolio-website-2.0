
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Publications /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;