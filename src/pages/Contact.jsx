import { useState } from 'react';
import TextAnimation from '../utils/logic';

function Form() {
  const [formInfo, setformInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleInput = e => {
    setformInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  // Utility function for email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validate Email
  const emailValidate = (e) => {
    e.preventDefault();

    const { email } = formInfo;

    if (email.trim() === '') {
      alert('Please enter your email before submitting.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      handleFormSubmit(e); // Call form submission if validation passes
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
    });

    alert('Form submitted successfully!');
  };

  return (
    <div
    className="container text-center ">
      <form className="form" onSubmit={emailValidate}>
        <input
          value={formInfo.firstName}
          name="firstName"
          onChange={handleInput}
          style={{ backgroundColor: '#f4f4f4' }}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formInfo.lastName}
          name="lastName"
          onChange={handleInput}
          style={{ backgroundColor: '#f4f4f4' }}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={formInfo.email}
          name="email"
          onChange={handleInput}
          style={{ backgroundColor: '#f4f4f4' }}
          type="email"
          placeholder="Youremail@address.com"
        />
        <div>
        <label style={{ color: '#f4f4f4' }} htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={formInfo.message}
          onChange={handleInput}
          style={{ width: '100%', height: '200px', padding: '10px', fontSize: '16px', backgroundColor: '#f4f4f4' }}
          placeholder="Type your message here..."
        />
      </div>
        <button className="btn btn-outline-light" type="submit">
          Submit
        </button>
      </form>
      <TextAnimation />
    </div>
  );
}

export default Form;
export const animationMessage = "Reach out anytime! Thank you for visiting!";