import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-center py-4 footer">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jesse-anderson-991108297"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0e76a8' }} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Vtencouchclimbr"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FontAwesomeIcon icon={faGithub} style={{ color: '#97e3b8' }} />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/JesseAnder28869"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FontAwesomeIcon icon={faXTwitter} style={{ color: '#e1e7a6' }} />
      </a>
    </footer>
  );
}
