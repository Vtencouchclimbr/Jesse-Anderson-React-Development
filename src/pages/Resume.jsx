import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faGithub, faReact, faPython, faBootstrap, faGitlab, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faBook, faCode, faCodeBranch, faDatabase, faGhost, faServer } from '@fortawesome/free-solid-svg-icons';

// import TextAnimation from '../utils/logic';
import resume from '../utils/Resume.pdf';

export default function Resume() {

  return (
    <div >
      <h1 style={{ color: '#f4f4f4' }}>Take a look at my resume</h1>
      <a href={resume} download="MyDocument.pdf">
        <button style={{ Color: '#f4f4f4' }} className="btn btn-outline-light">Download PDF</button>
      </a>
      <div style={{ color: '#f4f4f4' }}>
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
  );
}

// export const animationMessage1 = "see and believe";