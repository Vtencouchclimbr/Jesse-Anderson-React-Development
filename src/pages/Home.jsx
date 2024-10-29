import myImage from '../utils/me3.png';
import './Home.css';
import forest1 from '../utils/backgrounds/Dark4.jpg';


export default function Home() {
  return (
    <div className="d-flex flex-column flex-lg-row flex-grow-1"
      style={{
          minHeight: '100vh',
          backgroundImage: `url(${forest1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
      {/* Left Section with Text */}
      <div className="flex-grow-1 d-flex flex-column p-3">
        <h1
          style={{
            color: 'antiquewhite',
            fontSize: '35px',
            marginTop: '40px',
            marginLeft: '40px',
            fontFamily: 'Arial',
          }}
        >
          Welcome to my portfolio
        </h1>
        <div
          style={{
            color: 'antiquewhite',
            marginLeft: '100px',
            backgroundColor: 'rgb(63, 61, 78)',
            boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)',
          }}
          className="card d-flex flex-column align-items-end"
        >
          <div style={{ backgroundColor: 'rgb(63, 61, 78)', color: 'antiquewhite' }} className="card-body">
            <p className="card-text">
              A dedicated and versatile professional from Maryland, I bring a unique blend of technical and creative interests to <br /> 
              my role as a Software Engineer and Full Stack Developer. With a strong foundation from over 15 years in land surveying <br /> 
              and design for civil and structural engineering, I developed a keen attention to detail and problem-solving skills. <br />
              Beyond work, I enjoy an active lifestyle, immersing myself in the outdoors, and cultivating a passion for music. <br />
              Recently graduating from the University of Utah's Web Development Coding Bootcamp, I’ve built a comprehensive skill set <br /> 
              critical to modern software development. My technical expertise spansHTML, CSS, JavaScript, TypeScript, Node.js, Express, SQL, <br /> 
              PostgreSQL, React, the PERN and MERN stacks, NoSQL databases, MongoDB, and Mongoose. Additionally, I’m proficient with <br /> 
              JSON Web Tokens (JWTs), Apollo, Vitest, Cypress, and Python, along with tools like CircleCI, Insomnia, Render, Netlify, <br /> 
              GitHub Actions, GitHub, and pseudocode. I bring strong problem-solving abilities and a solid foundation in AI and document research. My five-year plan includes advancing to a senior developer role, becoming a team manager, and collaborating on personal projects with fellow developers. Throughout, I remain committed to continuous learning, growth, and contributing to high-impact projects within dynamic teams
            </p>
          </div>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="container1">
        <h1 className="signature">
          Jesse Anderson
        </h1>
        <h2 style={{ color: 'antiquewhite'}} className="titleText">
        Full Stack Developer | Software Engineer
        </h2>
        <img
          className="img-fluid"
          style={{ borderRadius: '5%', width: '100%'}}
          src={myImage}
          alt="Image of the developer"
        />
      </div>
    </div>
  );
}
