// import TextAnimation from '../utils/logic';
import myImage from '../utils/code7.jpg';

// const styles = {

//   body: {
//     height: '100vh',
//     margin: '0',
//     backgroundColor: '#16325B',
//   },
//   main: {
//     height: '100%',
//     margin: '0',
//     display: 'flex',
//     flexDirection: 'column',
//   }
// };

export default function Home() {
  return (
    <div style={{ border: '2px solid #007bff' }} className="d-flex flex-column align-items-center">
      <div>
      <h1 style={{ color: '#f4f4f4' }} className="">Jesse Anderson</h1>
      </div>
      <div className="my-" >
        <img style={{ width: '500px', height: '600px' }} src={myImage} alt="Image of the devloper" />
      </div>
      <div style={{ backgroundColor: '#f4f4f4', marginBottom: '' }} className="card w-50">
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum iste laborum cumque quis doloribus mollitia est error provident repellendus iure ipsa aliquam veniam consequuntur nesciunt, autem minima aliquid rerum! Inventore explicabo iusto beatae laborum, architecto maxime, debitis nesciunt repellat amet non sint dolores. Minus fuga architecto libero fugit harum ea debitis suscipit qui! Architecto quos quisquam praesentium facilis. Maiores laudantium soluta reiciendis repellat vero. Ipsam, mollitia! Aut autem fuga quas soluta. Molestias, quam deserunt. Totam animi libero optio voluptates reprehenderit aspernatur excepturi nihil, qui, obcaecati molestiae dolorum. Nobis provident praesentium unde consectetur distinctio sed officia voluptatem nulla quia qui aliquid adipisci ex vero, veritatis aut maiores voluptates suscipit repellendus laborum? Iusto nisi perspiciatis ipsum quis, eum doloremque natus velit. Praesentium veritatis nulla, maxime enim quia reiciendis, eveniet assumenda ut dicta eligendi omnis dolorem mollitia impedit. Rem natus rerum labore esse molestias obcaecati, eaque itaque fuga nihil aperiam odio, consequuntur aliquid repudiandae tempore fugiat maxime animi impedit excepturi autem quo iste totam. Eaque, ab nesciunt cupiditate animi ipsa, ipsum sunt eligendi labore laborum, repellat nostrum. Architecto earum fugit unde ipsam labore voluptatibus dolorum at quas, reprehenderit necessitatibus asperiores. Sit maiores voluptate iste quam ea saepe culpa eos nisi, asperiores qui sint?
          </p>
        </div>
      </div>
      {/* <TextAnimation  fullText={animationMessage2} /> */}
    </div>
  );
}

// export const animationMessage2 = "not today junior!";