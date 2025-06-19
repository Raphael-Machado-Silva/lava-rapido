import { Link } from 'react-router-dom'
import { FaCar, FaUser, FaSignOutAlt } from 'react-icons/fa'

const Header = ({ isAuthenticated, userRole, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <FaCar className="car-icon" />
        <h1>Lava Jato Express</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Quem Somos</Link></li>
          <li><Link to="/services">Serviços/Preços</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to={userRole === 'client' ? '/client' : '/admin'}>
                  <FaUser /> {userRole === 'client' ? 'Área do Cliente' : 'Admin'}
                </Link>
              </li>
              <li>
                <button onClick={onLogout} className="logout-btn">
                  <FaSignOutAlt /> Sair
                </button>
              </li>
            </>
          ) : (
            <li><Link to="/login" className="login-btn">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header