import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div>
    <ul style={{ backgroundColor: '#205375', position: 'relative' }} className="nav nav-tabs justify-content-end">
    <div><h1 style={{ fontSize: '30px', color: 'antiquewhite', fontFamily: 'Lucida Handwriting', zIndex: '100', position: 'relative', top: '10px', right: '1150px' }}>Jesse Anderson</h1></div>
      <li className="nav-item fs-4">
        <Link
          to="/"
          className={currentPage === '/Home' ? 'nav-link' : 'nav-link'} style={{ color: '#f4f4f4' }}
        >
          About
        </Link>
      </li>
      <li className="nav-item fs-4">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link' : 'nav-link'} style={{ color: '#f4f4f4' }}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item fs-4">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link' : 'nav-link'} style={{ color: '#f4f4f4' }}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item fs-4">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link' : 'nav-link'} style={{ color: '#f4f4f4' }}
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
