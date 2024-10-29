import './NavTabs.css';


import { useState } from 'react';

function NavTabs() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

  

export default NavTabs;
