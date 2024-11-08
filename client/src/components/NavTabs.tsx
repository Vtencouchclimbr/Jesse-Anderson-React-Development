import './NavTabs.css';

function NavTabs() {

  return (
    <nav className="navbar fixed-top">
      <div className="btn-group">
        <button 
        className="navTop btn btn-secondary dropdown-toggle" 
        type="button" 
        data-bs-toggle="dropdown" 
        data-bs-auto-close="true" 
        aria-expanded="false">
          Nav
        </button>
        <ul className="list dropdown-menu">
          <li className="nav-link"><a className="list-item dropdown-item" href="#home">Home</a></li>
          <li className="nav-link"><a className="list-item dropdown-item" href="#portfolio">Portfolio</a></li>
          <li className="nav-link"><a className="list-item dropdown-item" href="#resume">Resume</a></li>
          <li className="nav-link"><a className="list-item dropdown-item" href="#contact">Contact</a></li>
        </ul> 
      </div>
    </nav>
  );
};
  
export default NavTabs;
