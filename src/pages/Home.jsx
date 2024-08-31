import myImage from '../utils/Forest.jpg';

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Jesse Anderson</h1>
      <div className="my-5">
        <img style={{ width: '500px', height: '400px' }} src={myImage} alt="The forest through the trees" />
      </div>
      <div className="card w-50">
      <card className="card-body">
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum iste laborum cumque quis doloribus mollitia   est error provident repellendus iure ipsa aliquam veniam consequuntur nesciunt, autem minima aliquid rerum!   Inventore explicabo iusto beatae laborum, architecto maxime, debitis nesciunt repellat amet non sint dolores.   Minus fuga architecto libero fugit harum ea debitis suscipit qui! Architecto quos quisquam praesentium  facilis. Maiores laudantium soluta reiciendis repellat vero. Ipsam, mollitia! Aut autem fuga quas soluta.  Molestias, quam deserunt. Totam animi libero optio voluptates reprehenderit aspernatur excepturi nihil, qui,   obcaecati molestiae dolorum. Nobis provident praesentium unde consectetur distinctio sed officia voluptatem   nulla quia qui aliquid adipisci ex vero, veritatis aut maiores voluptates suscipit repellendus laborum? Iusto   nisi perspiciatis ipsum quis, eum doloremque natus velit. Praesentium veritatis nulla, maxime enim quia   reiciendis, eveniet assumenda ut dicta eligendi omnis dolorem mollitia impedit. Rem natus rerum labore esse   molestias obcaecati, eaque itaque fuga nihil aperiam odio, consequuntur aliquid repudiandae tempore fugiat  maxime animi impedit excepturi autem quo iste totam. Eaque, ab nesciunt cupiditate animi ipsa, ipsum sunt  eligendi labore laborum, repellat nostrum. Architecto earum fugit unde ipsam labore voluptatibus dolorum at  quas, reprehenderit necessitatibus asperiores. Sit maiores voluptate iste quam ea saepe culpa eos nisi,  asperiores qui sint?
        </p>
      </card>
      </div>
    </div>
  );
}
