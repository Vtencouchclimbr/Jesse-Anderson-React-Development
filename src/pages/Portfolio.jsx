import TextAnimation from '../utils/logic';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import myImage1 from '../utils/Forest.jpg';
import myImage2 from '../utils/smils.jpg';
import myImage3 from '../utils/mountain.jpg';
import myImage4 from '../utils/Forest.jpg';
import myImage5 from '../utils/Forest.jpg';
import myImage6 from '../utils/Forest.jpg';



const styles = {
  carouselImage: {
    width: '800px',
    height: '600px',
    objectFit: 'contain',
  }
};

export default function Portfolio() {
  return (
    <div id="carouselExample" className="carousel slide d-flex justify-content-center my-auto">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={myImage1} className="d-block w-100" style={styles.carouselImage} alt="First slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2>PostgreSQL Project</h2>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p>Click the links above to find out more</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage2} className="d-block w-100" style={styles.carouselImage} alt="Second slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2>PostgreSQL Project</h2>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p>Click the links above to find out more</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage3} className="d-block w-100" style={styles.carouselImage} alt="Third slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2>PostgreSQL Project</h2>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p>Click the links above to find out more</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage4} className="d-block w-100" style={styles.carouselImage} alt="Fourth slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2>PostgreSQL Project</h2>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p>Click the links above to find out more</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage5} className="d-block w-100" style={styles.carouselImage} alt="Fifth slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2>PostgreSQL Project</h2>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p>Click the links above to find out more</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage6} className="d-block w-100" style={styles.carouselImage} alt="Sixth slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2>PostgreSQL Project</h2>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p>Click the links above to find out more</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}