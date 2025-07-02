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
      <div className="auth-card">
        <div className="auth-brand">
          <FaCar className="auth-logo" />
          <h1>Lava Jato Express</h1>
        </div>
        
        <h2 className="auth-title">Acesse sua conta</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-field">
            <FaUser className="input-icon" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuário"
              required
            />
          </div>
          
          <div className="input-field">
            <FaLock className="input-icon" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="auth-button">
            <FaSignInAlt className="button-icon" />
            Entrar
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