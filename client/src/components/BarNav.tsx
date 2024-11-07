import { Link } from 'react-router-dom';

import './BarNav.css';

function BarNav() {
  return (
    <nav className="navcup">
        <ul className="barnav1 list-unstyled">
          <li className="barnavItem glo">
          <Link className="text-decoration-none" to="/">Home</Link>
          </li>
          <li className="barnavItem glo">
          <Link className="text-decoration-none" to="/Portfolio">Portfolio</Link>
          </li>
          <li className="barnavItem glo">
          <Link className="text-decoration-none" to="/Resume">Resume</Link>
          </li>
          <li className="barnavItem glo">
          <Link className="text-decoration-none" to="/Contact">Contact</Link>
          </li>
        </ul>
    </nav>
  );
}

export default BarNav;
