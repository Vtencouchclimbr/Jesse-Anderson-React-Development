import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import TextAnimation from '../utils/logic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import forest1 from '../utils/backgrounds/forest1.jpg';

function Contact() {
  const [formState, setFormState] = useState({
    firstname: "",
    email: "",
    password: ""
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
   
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { input: { ...formState } },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="screen">
          <div className="">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
    <div className="d-flex flex-column justify-content-center flex-lg-row flex-grow-1" style={{
      minHeight: '100vh',
      backgroundImage: `url(${forest1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="msgform">
      <div style={{color: 'rgb(245, 245, 250)'}} className='d-flex justify-content-center'><h2 className='contactTitle'>Restiger here!</h2></div>

      {/* Form section */}
      <form className="form-text row g-3 justify-content-center m-2" onSubmit={handleFormSubmit}>
        {/* First Name */}
        <div className="col-md-4 col-lg-3">
          <input
            value={formState.firstname}
            name="firstname"
            onChange={handleChange}
            className="form-control shadow"
            type="text"
            placeholder="First Name"
          />
        </div>

        {/* Email */}
        <div className="col-md-8 col-lg-6">
          <input
            value={formState.email}
            name="email"
            onChange={handleChange}
            className="form-control shadow"
            type="email"
            placeholder="Youremail@address.com"
          />
        </div>

        {/* Password */}
        <div className="col-md-8 col-lg-6">
          <input
            value={formState.password}
            name="password"
            onChange={handleChange}
            className="form-control shadow"
            type="password"
            placeholder="********"
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
      <div className="contact-info d-flex mt-4 justify-content-center">
        <ul className="list-unstyled">
          <li style={{ fontSize: '18px', fontFamily: 'Sans', color: 'rgb(245, 245, 250)' }}>Contact Information:</li>
          <li style={{ fontFamily: 'Lucida Handwriting', color: 'rgb(245, 245, 250)' }}>Jesse Anderson</li>
          <li style={{ fontFamily: 'Sans', color: 'rgb(245, 245, 250)' }}>(254)423-5822</li>
          <li>
            <a href="mailto:LmntryLmnt@gmail.com" style={{ color: 'rgb(245, 245, 250)', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGoogle} size="1x" className="me-2" />LmntryLmnt@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/Vtencouchclimbr" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(245, 245, 250)', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGithub} size="1x" className="me-2" />Vtencouchclimbr
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jesse-anderson-991108297/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(245, 245, 250)', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faLinkedin} size="1x" className="me-2" />jesse-anderson-991108297
            </a>
          </li>
        </ul>
      </div>
      {/* Text animation */}
      <div style={{height:'150px'}} className="dynamic-text d-flex justify-content-center">
        <TextAnimation />
      </div>
      </div>
    </div>
    
  )}
  {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
  </div>
  </div>
  );
}

export default Contact;

