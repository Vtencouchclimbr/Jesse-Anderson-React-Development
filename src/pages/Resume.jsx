import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faGithub, faReact, faPython, faBootstrap, faGitlab, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faBook, faCode, faCodeBranch, faDatabase, faGhost, faServer } from '@fortawesome/free-solid-svg-icons';

// import TextAnimation from '../utils/logic';
import resume from '../utils/Resume.pdf';

export default function Resume() {

  return (
    <div>
      <div style={{ marginRight: '163px', marginTop: '9px' }}className='d-flex flex-column align-items-end'>
     <div style={{ border: 'solid', color: 'antiquewhite', backgroundColor: 'antiquewhite', borderColor: 'antiquewhite', width: '14px' }} className='d-flex flex-column align-content-start'>↓</div>
     </div>
    <div style={{ height: '500px' }} className="d-flex flex-column flex-grow-1 align-items-center">
      <h1 style={{ fontSize: '45px', fontFamily: 'Brush Script MT', color: '#f4f4f4', textDecoration: 'none' }} className="flex-grow-1 align-content-center">Download my resume to explore my qualifications and experience</h1>
      <a href={resume} download="MyDocument.pdf">
        <button style={{ Color: '#f4f4f4', boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)' }} className="btn btn-outline-light align-content-end flex-grow-1">Download PDF</button>
      </a>
      <div style={{ color: '#f4f4f4' }} className="flex-grow-1 align-content-center">
        <FontAwesomeIcon icon={faCode} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faHtml5} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faCss3} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faDatabase} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faServer} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faReact} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faPython} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faBootstrap} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faBook} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faGitlab} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faSlack} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faCodeBranch} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faGithub} size="3x" style={{ marginRight: '10px' }} />
        <FontAwesomeIcon icon={faGhost} size="3x" style={{ marginRight: '10px' }} />
      </div>
      {/* <TextAnimation fullText={animationMessage1} /> */}
    </div>
    </div>

  );
}

// export const animationMessage1 = "see and believe";