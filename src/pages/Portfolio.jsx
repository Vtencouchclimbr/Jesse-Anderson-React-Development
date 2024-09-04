import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import myImage1 from '../utils/code1.jpg';
import myImage2 from '../utils/code2.jpg';
import myImage3 from '../utils/code3.jpg';
import myImage4 from '../utils/code4.jpg';
import myImage5 from '../utils/code5.jpg';
import myImage6 from '../utils/code6.jpg';



const styles = {
  carouselImage: {
    width: '800px',
    height: '600px',
    objectFit: 'contain',
  } 
};

export default function Portfolio() {
  return (
    <div>
    <div id="carouselExample" className="carousel slide d-flex justify-content-center my-auto">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={myImage1} className="d-block w-100" style={styles.carouselImage} alt="First slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2 style={{ color: '#f4f4f4', fontSize: '50px', fontFamily: 'Brush Script MT', textDecoration: 'none' }}>Project #1</h2>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p style={{ color: '#f4f4f4' }}></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage2} className="d-block w-100" style={styles.carouselImage} alt="Second slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2 style={{ color: '#f4f4f4', fontSize: '50px', fontFamily: 'Brush Script MT', textDecoration: 'none' }}>Project #2</h2>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p style={{ color: '#f4f4f4' }}></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage3} className="d-block w-100" style={styles.carouselImage} alt="Third slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2 style={{ color: '#f4f4f4', fontSize: '50px', fontFamily: 'Brush Script MT', textDecoration: 'none' }}>Project #3</h2>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p style={{ color: '#f4f4f4' }}></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage4} className="d-block w-100" style={styles.carouselImage} alt="Fourth slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2 style={{ color: '#f4f4f4', fontSize: '50px', fontFamily: 'Brush Script MT', textDecoration: 'none' }}>Project #4</h2>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p style={{ color: '#f4f4f4' }}></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage5} className="d-block w-100" style={styles.carouselImage} alt="Fifth slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2 style={{ color: '#f4f4f4', fontSize: '50px', fontFamily: 'Brush Script MT', textDecoration: 'none' }}>Project #5</h2>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p style={{ color: '#f4f4f4' }}></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={myImage6} className="d-block w-100" style={styles.carouselImage} alt="Sixth slide"/>
          <div className="carousel-caption d-none d-md-block">
          <h2 style={{ color: '#f4f4f4', fontSize: '50px', fontFamily: 'Brush Script MT', textDecoration: 'none' }}>Project #6</h2>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Github</a></h5>
          <h5><a style={{ fontSize: '30px', fontFamily: 'Brush Script MT', textDecoration: 'none' }} href="https://github.com/Vtencouchclimbr/Employee-Tracker-PostgreSQL" className="text-white">Deployed site</a></h5>
            <p style={{ color: '#f4f4f4' }}></p>
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
