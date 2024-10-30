
import NavTabs from './components/NavTabs';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <>
    
     <div className="portfolio"> 
      <NavTabs />
      <section id="home" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <Home />
      </section>
      <section id="portfolio" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <Portfolio />
      </section>
      <section id="resume" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <Resume />
      </section>
      <section id="contact" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <Contact />
      </section>
    </div>
    </>
  );
}

export default App;
