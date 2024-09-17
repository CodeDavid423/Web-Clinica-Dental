import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="headernav">
      <nav>
        <div className="left-content">
          <div className="logo">
            <Link to="/">
              <img src="/src/assets/Logo.PNG" alt="Consultorio Odontológico" />
            </Link>
          </div>
          <div className="nav-content">
            <h1>Odontomed</h1>
          </div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios/">Servicios</Link></li>
          <li><Link to="/trabaja-con-nosotros/">Trabaja con Nosotros</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;