import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3001/login', { 
        email, 
        password 
      });
      
      // 1. Atualiza o estado global do usuário
      setUser(data.user);
      
      // 2. Armazena no localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // 3. Redireciona para a página correta
      navigate(`/${data.user.role.toLowerCase()}`);
      
    } catch (err) {
      setError('Email ou senha incorretos!');
      console.error('Erro no login:', err);
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