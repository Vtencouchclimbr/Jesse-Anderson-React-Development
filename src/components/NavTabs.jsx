import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul style={{ backgroundColor: '#205375' }} className="nav nav-tabs justify-content-center">
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
  );
}

export default NavTabs;
