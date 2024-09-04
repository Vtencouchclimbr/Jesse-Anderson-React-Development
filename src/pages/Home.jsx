import myImage from '../utils/chimp.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className="d-flex flex-column flex-lg-row flex-grow-1" style={{ minHeight: '100vh' }}>
      {/* Left Section with Text */}
      <div className="flex-grow-1 d-flex flex-column p-3">
        <h1
          style={{
            fontSize: '35px',
            color: '#f4f4f4',
            marginTop: '40px',
            marginLeft: '40px',
            fontFamily: 'Brush Script MT',
          }}
        >
          A little bit about me:
        </h1>
        <div
          style={{
            marginLeft: '100px',
            backgroundColor: '#f4f4f4',
            boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)',
          }}
          className="card d-flex flex-column align-items-end"
        >
          <div className="card-body">
            <p className="card-text">
              I am a full-stack web developer and software engineer originally from Maryland, now residing in Utah,
              where I find inspiration in the majestic mountain landscapes. My passion for the outdoors is matched by
              my dedication to my craft, whether I'm climbing new heights in nature or tackling complex challenges in
              software development.
              <br />
              In addition to my technical expertise, I have a deep appreciation for music, particularly playing the
              piano, which allows me to express my creativity in different ways. I also enjoy cooking, where I can
              experiment with new recipes, and I find intellectual stimulation in reading and watching films. These
              interests complement my professional life, helping me maintain a well-rounded and balanced approach to
              both work and personal fulfillment.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="container1">
        <h1 className="signature">
          Jesse Anderson
        </h1>
        <img
          className="img-fluid"
          src={myImage}
          alt="Image of the developer"
        />
      </div>
    </div>
  );
}
