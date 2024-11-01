import BarNav from '../components/BarNav';
import Footer from '../components/Footer';


import tspPic from '../utils/projectThumbnails/tspPic.png';
import yesChef from '../utils/projectThumbnails/yesChef.png';
import kanBan from '../utils/projectThumbnails/kanBan.png';
import bookSearch from '../utils/projectThumbnails/bookSearch.png';
import testSuite from '../utils/projectThumbnails/testSuite.png';

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
          <h1 className="projName">Projects</h1>
          <p className="text-center desc">
            Here are some of the projects I have worked on. Click on the thumbnail to view the GitHub repo.
          </p>
        </div>
        <div className="imgbox">
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={tspPic} className="img img-fluid" alt="Project 1" />
            <div>
            <h2 className="projName">Tech Shopper Pro</h2>
            <p className="desc">Tech Shopper Pro is a full-stack e-commerce application that allows users to browse products, add items to a shopping cart, and proceed to checkout. It also includes a wishlist feature accessible through an off-canvas layout. Users can register and log in using JWT-based authentication, ensuring secure sessions and smooth interactions.</p>
            </div>
          </div>
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={yesChef} className="img img-fluid" alt="Project 2" />
            <div>
            <h2 className="projName">Yes, Chef!</h2>
            <p className="desc">Yes, Chef! Is a single application helps you select a recipe, generate a shopping list, and guide you through the cooking process.</p>
            </div>
          </div>
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={kanBan} className="img img-fluid" alt="Project 3" />
            <div>
            <h2 className="projName">Kanban Board</h2>
            <p className="desc">This is a Kanban board application that integrates JWT (JSON Web Token) authentication for user login and session management. The board allows users to create, update, and manage tasks across different columns (e.g., "To Do," "In Progress," "Done"). JWTs are used to authenticate users, ensuring that only authorized individuals can interact with the board. The authentication system helps protect sensitive routes and data, providing a secure environment for task management. This project demonstrates a combination of front-end task organization and secure back-end authentication using JWTs.</p>
            </div>
          </div>
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={bookSearch} className="img img-fluid" alt="Project 4" />
            <div>
            <h2 className="projName">Book Search Engine</h2>
            <p className="desc">The Book Search Engine is a sophisticated web application that enables users to search for books using the Google Books API, providing access to an extensive catalog of titles and information. Designed with a responsive and intuitive interface, this search engine integrates Apollo and GraphQL on the backend, ensuring efficient data retrieval and seamless querying capabilities. Users can explore, save, and manage book listings dynamically, enjoying a smooth experience backed by modern API technology and a robust, scalable GraphQL architecture. This application combines the power of Google’s vast library with a performant backend, offering an optimized and engaging book discovery experience.</p>
            </div>
          </div>
          <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
            <img src={testSuite} className="img img-fluid" alt="Project 5" />
            <div>
            <h2 className="projName">Testing Suite</h2>
            <p className="desc">A testing suite application built with the MERN stack (MongoDB, Express.js, React, Node.js) leverages Cypress for end-to-end testing, ensuring smooth user interactions and robust performance. This application allows developers to write and execute tests within an intuitive interface, simulating real user scenarios across different browser environments. Cypress’s powerful testing capabilities, paired with the scalability of MERN, provide an efficient, integrated solution to validate front-end behavior, backend API responses, and database functionality, ultimately enhancing code quality and reliability in production.</p>
            </div>
          </div>
        </div>
        <div className="footer col-12 col-md-6 col-lg-4">
        <Footer />
        </div>
      </div>
    
  );
}

