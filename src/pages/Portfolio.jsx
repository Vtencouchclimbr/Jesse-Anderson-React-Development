import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Portfolio.css';
import code from '../utils/backgrounds/code.jpg';

import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="d-flex flex-column justify-content-center flex-lg-row flex-grow-1" style={{
      minHeight: '100vh',
      backgroundImage: `url(${code})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="information d-flex flex-column justify-content-center align-items-center flex-lg-row flex-grow-1">
        <div className="btns"> 
          <div>
          <Link to="/projects">
            <button className="glow-on-hover eachbtn" type="button">View Projects</button>
          </Link>
          </div>
          <div>
          <Link to="/code">
            <button className="glow-on-hover eachbtn" type="button">View Code</button>
          </Link>
          </div>
        </div>   
        <div className="projects">
          <ul className="list-group">
          <li className="list-group-item"><a href="https://github.com/Vtencouchclimbr/Tech-Shopper-Pro">Tech Shopper Pro</a></li>
          <li className="list-group-item"><a href="https://github.com/TEMPTAG/Yes-Chef">Yes, Chef!</a></li>
          <li className="list-group-item"><a href="https://github.com/Vtencouchclimbr/Module-14-Challenge_Kanban-Board">Kanban Board</a></li>
          <li className="list-group-item"><a href="https://github.com/Vtencouchclimbr/Book-Search-Engine">Book Search Engine</a></li>
          <li className="list-group-item"><a href="https://github.com/Vtencouchclimbr/Test-Suite">Testing Suite</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
