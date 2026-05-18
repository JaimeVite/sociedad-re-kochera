import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';
import VideoSection from './components/VideoSection'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Gallery />
       <Contact />
      <Footer />
     

    </div>
  );
}

export default App;
