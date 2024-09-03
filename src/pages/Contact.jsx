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
    <div  className="container d-flex flex-column flex-grow-1">
      <div style={{ paddingTop: '30px' }} className="d-flex">
      <TextAnimation />
      </div>
      <form style={{ paddingTop: '80px' }} className="form d-flex align-items-center" onSubmit={emailValidate}>
        <div className="d-flex flex-column">
        <input
          value={formInfo.firstName}
          name="firstName"
          onChange={handleInput}
          className=""
          style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)', marginBottom: '20px' }}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formInfo.lastName}
          name="lastName"
          onChange={handleInput}
          className=""
          style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)', marginBottom: '20px' }}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={formInfo.email}
          name="email"
          onChange={handleInput}
          className="align-items-start"
          style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)' }}
          type="email"
          placeholder="Youremail@address.com"
        />
        </div>
        <div className="d-flex align-items-center" style={{  }}>
        <label className="" style={{ color: '#f4f4f4', paddingLeft: '60px', paddingRight: '0px' }} htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          value={formInfo.message}
          onChange={handleInput}
          className=""
          style={{ width: '600px', height: '200px', padding: '10px', fontSize: '16px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)' }}
          placeholder="Type your message here..."
        />
        <div style={{ paddingLeft: '30px' }}>
        <button style={{ boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)' }} className="btn btn-outline-light" type="submit">
          Submit
        </button>
        </div>
        </div >
      </form>
      <div style={{ width: '100%' }} className="d-flex flex-grow-1 align-items-end">
        <ul style={{ color: 'antiquewhite', listStyle: 'none' }}>
          <li>Contact Information:</li>
          <li style={{ marginLeft: '25px', fontFamily: 'Lucida Handwriting' }}>Jesse Anderson</li>
          <li style={{ marginLeft: '25px', fontFamily: 'Sans' }}>LmntryLmnt@gmail.com</li>
          <li style={{ marginLeft: '25px', fontFamily: 'arial' }}>Third item</li>
        </ul>
      </div>
    </div>
  );
}

export default Form;
export const animationMessage = "Thank you for visiting! Please enter your contact information below.↓";