import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCar, FaUser, FaLock, FaSignInAlt } from 'react-icons/fa'
import './Login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (username === 'cliente' && password === 'cliente123') {
      onLogin('client')
      navigate('/client')
    } else if (username === 'admin' && password === 'admin123') {
      onLogin('admin')
      navigate('/admin')
    } else {
      setError('Credenciais inválidas. Tente cliente/cliente123 ou admin/admin123')
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-divider"></div>
      
      <div className="auth-card">
        <div className="auth-brand">
          <FaCar className="auth-logo" />
          <h1>Lava Jato Express</h1>
        </div>
        
        <h2 className="auth-title">Acesse sua conta</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-field">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username" className="input-label">
              <FaUser className="label-icon" />
              <span>Usuário</span>
            </label>
          </div>
          
          <div className="input-field">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password" className="input-label">
              <FaLock className="label-icon" />
              <span>Senha</span>
            </label>
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="auth-button">
            Entrar
            <FaSignInAlt className="button-icon" />
          </button>
        </form>
        
        <div className="auth-footer">
          <p className="auth-hint">
            Use: <strong>cliente/cliente123</strong> ou <strong>admin/admin123</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login