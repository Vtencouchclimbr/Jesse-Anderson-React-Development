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
    <ul class="list-group">
      <li class="list-group-item">Tsp</li>
      <li class="list-group-item">Yes, Chef!</li>
      <li class="list-group-item">14</li>
      <li class="list-group-item">18</li>
      <li class="list-group-item">19</li>
    </ul>
      <div>
      <button className="glow-on-hover" type="button">View My Projects</button>
      </div>
      <div>
      <button className="glow-on-hover" type="button">View My Code</button>
      </div>
    </div>
  );
}
