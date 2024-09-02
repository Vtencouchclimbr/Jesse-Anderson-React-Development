import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const styles = {

    footer: {
      padding: '25px',
      justifyContent: 'center',
      textAlign: 'center',
      alignSelf: 'flex-end',
      width: '100%',
    }
  };

export default function Footer() {
    return (
      <div className="bg-dark fa-2x" style={styles.footer}>
        <a href="https://www.linkedin.com/in/jesse-anderson-991108297" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0e76a8', marginRight: '10px' }} />
      </a>
      <a href="https://github.com/Vtencouchclimbr" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} style={{ color: '#97e3b8', marginRight: '10px' }} />
      </a>
      <a href="https://x.com/JesseAnder28869" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} style={{ color: '#e1e7a6', marginRight: '10px' }} />
      </a>
      </div>
    );
  }