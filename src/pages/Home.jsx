// import TextAnimation from '../utils/logic';
import myImage from '../utils/chimp.jpg';

export default function Home() {
  return (
    <div style={{  height: '720px' }} className="d-flex flex-grow-1">
      <div style={{  height: '100%', width: '100%' }} className="">
        <h1 style={{  fontSize: '35px', color: '#f4f4f4', marginTop: '40px', marginLeft: '40px', fontFamily: 'Brush Script MT' }}>A little bit about me:</h1>
        <div style={{ marginLeft: '100px', backgroundColor: '#f4f4f4', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)' }} className="card d-flex flex-column align-items-end">
          <div className="card-body">
            <p className="card-text">
            I am a full-stack web developer and software engineer originally from Maryland, now residing in Utah, where I find inspiration in the majestic mountain landscapes. My passion for the outdoors is matched by my dedication to my craft, whether I'm climbing new heights in nature or tackling complex challenges in software development.
            In addition to my technical expertise, I have a deep appreciation for music, particularly playing the piano, which allows me to express my creativity in different ways. I also enjoy cooking, where I can experiment with new recipes, and I find intellectual stimulation in reading and watching films. These interests complement my professional life, helping me maintain a well-rounded and balanced approach to both work and personal fulfillment.
            </p>
          </div>
        </div>
      </div>
      <div style={{  height: '100%', width: '100%', position: 'relative' }} className="d-flex justify-content-center align-items-center">
      <span style={{ border: 'solid', color: 'antiquewhite', backgroundColor: 'antiquewhite', borderColor: 'antiquewhite', position: 'relative', top: '-380px', left: '386px' }}>↓</span>
      <h1 style={{ fontSize: '75px', color: 'antiquewhite', fontFamily: 'Lucida Handwriting', zIndex: '100', position: 'relative', top: '200px', right: '400px', zIndex: 100 }} className="">Jesse Anderson</h1>
      <img style={{ width: '500px', height: '500px', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)', position: 'absolute', top: '', left: '', zIndex: 1 }} src={myImage} alt="Image of the devloper" />
      </div>
      
      {/* <TextAnimation  fullText={animationMessage2} /> */}
    </div>
  );
}

// export const animationMessage2 = "not today junior!";