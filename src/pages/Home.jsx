// import TextAnimation from '../utils/logic';
import myImage from '../utils/chimp.jpg';

export default function Home() {
  return (
    <div style={{ height: '720px' }} className="d-flex flex-grow-1">
      <div style={{ height: '100%', width: '100%' }} className="">
        <h1 style={{ fontSize: '35px', color: '#f4f4f4', marginTop: '40px', marginLeft: '40px', fontFamily: 'Brush Script MT' }}>A little bit about me:</h1>
        <div style={{ marginLeft: '100px', backgroundColor: '#f4f4f4', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)' }} className="card d-flex flex-column align-items-end">
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum iste laborum cumque quis doloribus mollitia est error provident repellendus iure ipsa aliquam   veniam consequuntur nesciunt, autem minima aliquid rerum! Inventore explicabo iusto beatae laborum, architecto maxime, debitis nesciunt repellat amet non sint  dolores. Minus fuga architecto libero fugit harum ea debitis suscipit qui! Architecto quos quisquam praesentium facilis. Maiores laudantium soluta reiciendis  repellat vero. Ipsam, mollitia! Aut autem fuga quas soluta. Molestias, quam deserunt. Totam animi libero optio voluptates reprehenderit aspernatur excepturi nihil,  qui, obcaecati molestiae dolorum. Nobis provident praesentium unde consectetur distinctio sed officia voluptatem nulla quia qui aliquid adipisci ex vero, veritatis  aut maiores voluptates suscipit repellendus laborum? Iusto nisi perspiciatis ipsum quis, eum doloremque natus velit. Praesentium veritatis nulla, maxime enim quia   reiciendis, eveniet assumenda ut dicta eligendi omnis dolorem mollitia impedit. Rem natus rerum labore esse molestias obcaecati, eaque itaque fuga nihil aperiam  odio, consequuntur aliquid repudiandae tempore fugiat maxime animi impedit excepturi autem quo iste totam. Eaque, ab nesciunt cupiditate animi ipsa, ipsum sunt  eligendi labore laborum, repellat nostrum. Architecto earum fugit unde ipsam labore voluptatibus dolorum at quas, reprehenderit necessitatibus asperiores. Sit   maiores voluptate iste quam ea saepe culpa eos nisi, asperiores qui sint?
            </p>
          </div>
        </div>
      </div>
      <div style={{  height: '100%', width: '100%', position: 'relative' }} className="d-flex justify-content-center align-items-center">
      <h1 style={{ fontSize: '75px', color: 'antiquewhite', fontFamily: 'Lucida Handwriting', zIndex: '100', position: 'relative', top: '200px', right: '400px', zIndex: 100 }} className="">Jesse Anderson</h1>
      
        <img style={{ width: '500px', height: '500px', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)', position: 'absolute', top: '', left: '', zIndex: 1 }} src={myImage} alt="Image of the devloper" />
      </div>
      
      {/* <TextAnimation  fullText={animationMessage2} /> */}
    </div>
  );
}

// export const animationMessage2 = "not today junior!";