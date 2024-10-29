import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import vertColor from './utils/Samurai2.jpg';

function App() {
  return (
    <>
      <div
        className="d-flex flex-column min-vh-100"
        style={{
          backgroundImage: `url(${vertColor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <main className="flex-grow-1 d-flex justify-content-center align-items-center">
          {/* The content will be centered */}
          <div className="container-fluid p-0">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
