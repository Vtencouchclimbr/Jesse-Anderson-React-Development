import { useState } from 'react';
import TextAnimation from '../utils/logic';


function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const [formInfo, setformInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleInput = e => {
      setformInfo({...formInfo, [e.target.name]: e.target.value});
  }

  // const handleBlur = () => {
  //   if (message.trim() === '') {
  //     alert('This field is required.');
  //   }
  // };

  const emailValidate = (e) => {
    e.preventDefault();

    let email = formInfo.email

    if (email.trim() === '') {
      alert('Please enter your email before submitting.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      setformInfo({ 
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    }
    
  };

  // Preventing the default behavior of the form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

  // Clear inputs after submit
    setformInfo({ 
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    })
  };

  return (
    <div className="container text-center ">
      <h1>
        Hello {formInfo.firstName} {formInfo.lastName}
      </h1>
      <form className="form" onSubmit={emailValidate}>
        <input
          value={formInfo.firstName}
          name="firstName"
          onChange={handleInput}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formInfo.lastName}
          name="lastName"
          onChange={handleInput}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={formInfo.email}
          name="email"
          onChange={handleInput}
          type="email"
          placeholder="Youremail@address.com"
        />
        <div>
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={formInfo.message}
          onChange={handleInput}
          style={{ width: '100%', height: '200px', padding: '10px', fontSize: '16px' }}
          placeholder="Type your message here..."
        />
      </div>
        <button type="submit">
          Submit
        </button>
      </form>
      <TextAnimation />
    </div>
  );
}

export default Form;
