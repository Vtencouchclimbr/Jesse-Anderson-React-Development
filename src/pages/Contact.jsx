import { useState } from 'react';
import TextAnimation from '../utils/logic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

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

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const emailValidate = (e) => {
    e.preventDefault();
    const { email } = formInfo;
    if (!email.trim()) {
      alert('Please enter your email before submitting.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      handleFormSubmit(e);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setformInfo({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
    alert('Form submitted successfully!');
  };

  return (
    <div className="container-fluid">

      {/* Text animation */}
      <div className="dynamic-text">
        <TextAnimation />
      </div>

      {/* Form section */}
      <form className="row g-3 justify-content-center form-text" onSubmit={emailValidate}>
        {/* First Name */}
        <div className="col-md-4 col-lg-3">
          <input
            value={formInfo.firstName}
            name="firstName"
            onChange={handleInput}
            className="form-control shadow"
            type="text"
            placeholder="First Name"
          />
        </div>

        {/* Last Name */}
        <div className="col-md-4 col-lg-3">
          <input
            value={formInfo.lastName}
            name="lastName"
            onChange={handleInput}
            className="form-control shadow"
            type="text"
            placeholder="Last Name"
          />
        </div>

        {/* Email */}
        <div className="col-md-8 col-lg-6">
          <input
            value={formInfo.email}
            name="email"
            onChange={handleInput}
            className="form-control shadow"
            type="email"
            placeholder="Youremail@address.com"
          />
        </div>

        {/* Message */}
        <div className="col-12">
          <textarea
            id="message"
            name="message"
            value={formInfo.message}
            onChange={handleInput}
            className="form-control shadow"
            placeholder="Type your message here..."
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="col-md-12 text-center">
          <button className="btn btn-outline-light shadow" type="submit">
            Submit
          </button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="d-flex mt-4 contact-info">
        <ul className="list-unstyled">
          <li style={{ fontSize: '18px', fontFamily: 'Sans', color: 'antiquewhite' }}>Contact Information:</li>
          <li style={{ fontFamily: 'Lucida Handwriting', color: 'antiquewhite' }}>Jesse Anderson</li>
          <li style={{ fontFamily: 'Sans', color: 'antiquewhite' }}>(254)423-5822</li>
          <li>
            <a href="mailto:LmntryLmnt@gmail.com" style={{ color: 'antiquewhite', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGoogle} size="1x" className="me-2" />LmntryLmnt@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/Vtencouchclimbr" target="_blank" rel="noopener noreferrer" style={{ color: 'antiquewhite', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGithub} size="1x" className="me-2" />Vtencouchclimbr
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jesse-anderson-991108297/" target="_blank" rel="noopener noreferrer" style={{ color: 'antiquewhite', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faLinkedin} size="1x" className="me-2" />jesse-anderson-991108297
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Form;
export const animationMessage = "Thank you for visiting! Please enter your contact information below.↓";
