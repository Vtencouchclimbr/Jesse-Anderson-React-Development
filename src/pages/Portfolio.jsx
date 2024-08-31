import myImage from '../utils/Forest.jpg';

export default function Portfolio() {
  return (
    <div>
      <h1>First Image</h1>
      <div className="my-5">
        <img style={{ width: '500px', height: '400px' }} src={myImage} alt="The forest through the trees" />
      </div>
    </div>
  );
}
