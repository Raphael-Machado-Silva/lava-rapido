import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulação de login
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
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Entrar</button>
      </form>
      <p className="login-hint">
        Use: cliente/cliente123 ou admin/admin123
      </p>
    </div>
  )
}

export default Login