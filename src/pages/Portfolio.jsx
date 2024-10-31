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
          <h2>Here are some of the projects I've been working on recently,</h2>
          <h3>along with some code I have been catalogging while problem solving</h3>
          <h3>(Code better viewed on</h3>
          <h3>full sized screens)</h3>
          <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <h2>View Projects</h2>
          <Link to="/projects">
            <button className="glow eachbtn" type="button">View Projects</button>
          </Link>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
          <h2>View Code</h2>
          <Link to="/code">
            <button className="glow eachbtn" type="button">View Code</button>
          </Link>
          </div>
        </div>   
      </div>
    </div>
  );
}
