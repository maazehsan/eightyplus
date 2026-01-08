import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Featured from './components/Featured/Featured';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Location from './components/Location/Location';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Highlights />
        <Featured />
        <About />
        <Testimonials />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
