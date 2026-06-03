import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Planettable from './components/Planettable';
import ContactForm from './components/Contactform';
import VideoSection from './components/Videosection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoSection />
      <Planettable />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
