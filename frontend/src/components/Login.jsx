import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3001/login', { email, password });
      
      // Redireciona conforme o tipo de usuário
      switch(data.user.role) {
        case 'ADMIN':
          navigate('/admin');
          break;
        case 'FUNCIONARIO':
          navigate('/funcionario');
          break;
        case 'CLIENTE':
          navigate('/cliente');
          break;
        default:
          navigate('/');
      }
      
      // Salva o usuário no localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (err) {
      setError('Credenciais inválidas!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;