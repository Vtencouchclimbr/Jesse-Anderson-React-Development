import BarNav from '../components/BarNav';
import Footer from '../components/Footer';


import code1 from '../utils/projectThumbnails/code1.jpg';
import code2 from '../utils/projectThumbnails/code2.jpg';
import Dark4 from '../utils/backgrounds/humanoid.jpg';


import './Projects.css';


export default function Projects() {
  return (
    
      <div className="d-flex flex-column align-items-center"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${Dark4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div className='barnav'>
        <BarNav />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4 mt-4 d-flex flex-column align-items-center">
          <h1>Projects</h1>
          <p className="text-center">
            Here are some of the projects I have worked on. Click on the thumbnail to view the GitHub repo.
          </p>
        </div>
        <div className="imgbox">
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={code1} className="img img-fluid" alt="Project 1" />
            <div>
            <h2>Tech Shopper Pro</h2>
            <p>you and me and project 1</p>
            </div>
          </div>
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={code2} className="img img-fluid" alt="Project 2" />
            <div>
            <h2>Yes, Chef!</h2>
            <p>you and me and project 1</p>
            </div>
          </div>
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={code2} className="img img-fluid" alt="Project 3" />
            <div>
            <h2>Kanban Board</h2>
            <p>you and me and project 1</p>
            </div>
          </div>
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={code2} className="img img-fluid" alt="Project 4" />
            <div>
            <h2>Book Search Engine</h2>
            <p>you and me and project 1</p>
            </div>
          </div>
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={code2} className="img img-fluid" alt="Project 5" />
            <div>
            <h2>Testing Suite</h2>
            <p>you and me and project 1</p>
            </div>
          </div>
        </div>
        <div className="footer col-12 col-md-6 col-lg-4">
        <Footer />
        </div>
      </div>
    
  );
}

