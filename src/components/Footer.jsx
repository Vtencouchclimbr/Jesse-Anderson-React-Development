import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const styles = {

    footer: {
      padding: '25px',
      color: 'white',
      justifyContent: 'center',
      textAlign: 'center',
      alignSelf: 'flex-end',
    }
  };

export default function Footer() {
    return (
      <div className="bg-dark fa-2x" style={styles.footer}>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0e76a8', marginRight: '10px' }} />
      </a>
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} style={{ color: '#97e3b8', marginRight: '10px' }} />
      </a>
      </div>
    );
  }