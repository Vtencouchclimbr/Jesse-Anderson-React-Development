import myImage from '../utils/me3.png';
import './Home.css';
import Dark4 from '../utils/backgrounds/Dark4.jpg';
// import Login from './Login';
// import Signup fro './Signup';

export default function Home() {
  return (
    <div className="d-flex flex-column flex-lg-row flex-grow-1"
      style={{
          minHeight: '100vh',
          backgroundImage: `url(${Dark4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        >
      {/* Left Section with Text */}
      <div className='logContainer d-flex flec-column'>
        <div className="cardTitle d-flex flex-column m-2">
          <h2 className='welcome mt-5'>
            Welcome to my portfolio
          </h2>
          <div className="aboutCard card d-flex flex-column align-items-center">
            <div style={{ backgroundColor: 'rgb(63, 61, 78)', color: 'antiquewhite' }} className="card-body">
              <p className="card-text">
                A dedicated and versatile professional from Maryland, I bring a unique blend of technical and creative interests to <br /> 
                my role as a Software Engineer and Full Stack Developer. With a strong foundation from over 15 years in land surveying <br /> 
                and design for civil and structural engineering, I developed a keen attention to detail and problem-solving skills. <br />
                Beyond work, I enjoy an active lifestyle, immersing myself in the outdoors, and cultivating a passion for music. <br />
                Recently graduating from the University of Utah's Web Development Coding Bootcamp, I’ve built a comprehensive skill set <br /> 
                critical to modern software development. My technical expertise spans HTML, CSS, JavaScript, TypeScript, Node.js, Express, SQL, <br /> 
                PostgreSQL, React, the PERN and MERN stacks, NoSQL databases, MongoDB, and Mongoose. Additionally, I’m experienced with <br /> 
                JSON Web Tokens (JWTs), Apollo, Vitest, Cypress, and Python, along with tools like CircleCI, Insomnia, Render, Netlify, <br /> 
                GitHub Actions, GitHub, and pseudocode. I bring strong problem-solving abilities and a solid foundation in AI and document <br />
                research. My five-year plan includes advancing to a senior developer role, becoming a team manager, and collaborating on <br />
                personal projects with fellow developers. Throughout, I remain committed to continuous learning, growth, and contributing to <br />
                high-impact projects within dynamic teams
              </p>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="container1">
          <h1 className="signature">
            Jesse Anderson
          </h1>
          <h2 style={{ color: 'antiquewhite' }} className="titleText">
          Full Stack Developer && Software Engineer
          </h2>
          <img
            className="img-fluid myPic"
            style={{ borderRadius: '5%', width: '100%'}}
            src={myImage}
            alt="Image of the developer"
          />
        </div>
      </div>
      {/* <div className='logOption m-2'>
        <Login />
        <p style={{color:'antiquewhite'}}>Sign-in here or <br />Register on the contact page below</p>
      </div> */}
    </div>
  );
}
