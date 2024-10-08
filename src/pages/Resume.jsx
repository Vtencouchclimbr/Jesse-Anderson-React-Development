import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faGithub,
  faReact,
  faPython,
  faBootstrap,
  faGitlab,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';
import { faBook, faCode, faCodeBranch, faDatabase, faGhost, faServer } from '@fortawesome/free-solid-svg-icons';
import resume from '../utils/Resume.pdf';
import './Resume.css';

export default function Resume() {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center text-center py-5">
        <h1 className="display-4" style={{ fontFamily: 'Brush Script MT', color: '#f4f4f4' }}>
          Download my resume to explore my qualifications and experience
        </h1>

        <a href={resume} download="MyDocument.pdf" className="my-4">
          <button className="btn btn-outline-light btn-lg shadow">
            Download PDF
          </button>
        </a>

        <div className="icon d-flex flex-wrap justify-content-center" style={{ color: '#f4f4f4' }}>
          <FontAwesomeIcon icon={faCode} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faHtml5} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faCss3} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faDatabase} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faServer} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faReact} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faPython} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faBootstrap} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faBook} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faGitlab} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faSlack} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faCodeBranch} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faGithub} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faGhost} size="3x" className="mx-3 my-2" />
        </div>
      </div>
    </div>
  );
}
