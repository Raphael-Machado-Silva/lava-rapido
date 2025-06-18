import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ClientDashboard from './components/ClientDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verifica se há usuário logado ao carregar
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota de Login (só acessível se não estiver logado) */}
        <Route 
          path="/" 
          element={!user ? <Login setUser={setUser} /> : <Navigate to={`/${user.role.toLowerCase()}`} />} 
        />
        
        {/* Rotas Protegidas */}
        <Route 
          path="/cliente" 
          element={user?.role === 'CLIENTE' ? <ClientDashboard /> : <Navigate to="/" />} 
        />
        <Route 
          path="/funcionario" 
          element={user?.role === 'FUNCIONARIO' ? <EmployeeDashboard /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin" 
          element={user?.role === 'ADMIN' ? <AdminDashboard /> : <Navigate to="/" />} 
        />
        
        {/* Redireciona qualquer rota inválida para a raiz */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;