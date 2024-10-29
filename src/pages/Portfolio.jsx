import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Portfolio.css';
import code from '../utils/backgrounds/code.jpg';

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
        <button className="glow-on-hover eachbtn" type="button">View My Projects</button>
        </div>
        <div>
        <button className="glow-on-hover eachbtn" type="button">View My Code</button>
        </div>
      </div>   
        <ul className="list-group projects">
        <li className="list-group-item">Tsp</li>
        <li className="list-group-item">Yes, Chef!</li>
        <li className="list-group-item">14</li>
        <li className="list-group-item">18</li>
        <li className="list-group-item">19</li>
        </ul>
        </div>
      </div>
  );
}
