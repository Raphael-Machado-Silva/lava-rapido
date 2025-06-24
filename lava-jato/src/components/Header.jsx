import { Link } from 'react-router-dom'
import { FaCar, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ isAuthenticated, userRole, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // No seu componente Header (adicionar useEffect)
useEffect(() => {
  const handleScroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <FaCar className="car-icon" />
          <h1>Lava Jato Express</h1>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <NavLinks 
              isAuthenticated={isAuthenticated} 
              userRole={userRole} 
              onLogout={onLogout} 
            />
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <NavLinks 
            isAuthenticated={isAuthenticated} 
            userRole={userRole} 
            onLogout={onLogout} 
            mobile={true}
          />
        </ul>
      </nav>
    </header>
  )
}

// Componente auxiliar para os links de navegação
const NavLinks = ({ isAuthenticated, userRole, onLogout, mobile }) => {
  return (
    <>
      <li><Link to="/" onClick={mobile ? () => {} : null}>Home</Link></li>
      <li><Link to="/about" onClick={mobile ? () => {} : null}>Quem Somos</Link></li>
      <li><Link to="/services" onClick={mobile ? () => {} : null}>Serviços/Preços</Link></li>
      <li><Link to="/contact" onClick={mobile ? () => {} : null}>Contato</Link></li>
      {isAuthenticated ? (
        <>
          <li>
            <Link to={userRole === 'client' ? '/client' : '/admin'} onClick={mobile ? () => {} : null}>
              <FaUser /> {userRole === 'client' ? 'Área do Cliente' : 'Admin'}
            </Link>
          </li>
          <li>
            <button onClick={() => {
              onLogout();
              if (mobile) {}
            }} className="logout-btn">
              <FaSignOutAlt /> Sair
            </button>
          </li>
        </>
      ) : (
        <li><Link to="/login" className="login-btn" onClick={mobile ? () => {} : null}>Login</Link></li>
      )}
    </>
  )
}

export default Header