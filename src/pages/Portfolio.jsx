import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Portfolio.css';

import myImage1 from '../utils/code1.jpg';
import myImage2 from '../utils/code2.jpg';
import myImage3 from '../utils/code3.jpg';
import myImage4 from '../utils/code4.jpg';
import myImage5 from '../utils/code5.jpg';
import myImage6 from '../utils/code7.jpg';

const styles = {
  carouselImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
};
const styles1 = {
  imgtext: {
    fontFamily: 'Brush Script MT',
  },
};

export default function Portfolio() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide d-flex justify-content-center my-auto">
        <div className="carousel-inner scrnsht">
          <div className="carousel-item active">
            <img src={myImage1} className="d-block w-100" style={styles.carouselImage} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={styles1.imgtext} className="display-4 text-white">Project #1</h2>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Github
                </a>
              </h5>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Deployed site
                </a>
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={myImage2} className="d-block w-100" style={styles.carouselImage} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={styles1.imgtext} className="display-4 text-white">Project #2</h2>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Github
                </a>
              </h5>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Deployed site
                </a>
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={myImage3} className="d-block w-100" style={styles.carouselImage} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={styles1.imgtext} className="display-4 text-white">Project #2</h2>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Github
                </a>
              </h5>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Deployed site
                </a>
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={myImage4} className="d-block w-100" style={styles.carouselImage} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={styles1.imgtext} className="display-4 text-white">Project #2</h2>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Github
                </a>
              </h5>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Deployed site
                </a>
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={myImage5} className="d-block w-100" style={styles.carouselImage} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={styles1.imgtext} className="display-4 text-white">Project #2</h2>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Github
                </a>
              </h5>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Deployed site
                </a>
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={myImage6} className="d-block w-100" style={styles.carouselImage} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={styles1.imgtext} className="display-4 text-white">Project #2</h2>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Github
                </a>
              </h5>
              <h5>
                <a style={styles1.imgtext} className="text-white" href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL">
                  Deployed site
                </a>
              </h5>
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
    </div>
  );
}
