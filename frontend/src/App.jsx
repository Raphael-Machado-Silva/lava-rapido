import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ClientDashboard from './components/ClientDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard';
import './styles.css';


const App = () => {
  const checkAuth = (requiredRole) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && (user.role === requiredRole || requiredRole === null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/cliente" 
          element={checkAuth('CLIENTE') ? <ClientDashboard /> : <Navigate to="/" />} 
        />
        <Route 
          path="/funcionario" 
          element={checkAuth('FUNCIONARIO') ? <EmployeeDashboard /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin" 
          element={checkAuth('ADMIN') ? <AdminDashboard /> : <Navigate to="/" />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;