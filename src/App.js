import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Planettable from './components/Planettable';
import ContactForm from './components/Contactform';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import PlanetCard from './components/PlanetCard';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoSection />
      <PlanetCard/>
      <Planettable />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
