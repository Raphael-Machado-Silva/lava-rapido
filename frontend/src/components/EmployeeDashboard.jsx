import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'FUNCIONARIO') {
      navigate('/');
      return;
    }

    const loadTodayAppointments = () => {
      axios.get('http://localhost:3001/appointments/today')
        .then(res => setAppointments(res.data));
    };

    loadTodayAppointments();
    const interval = setInterval(loadTodayAppointments, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleComplete = async (id) => {
    await axios.patch(`http://localhost:3001/appointments/${id}/status`, {
      status: 'CONCLUIDO'
    });
    setAppointments(appointments.map(app =>
      app.id === id ? { ...app, status: 'CONCLUIDO' } : app
    ));
  };

  return (
    <div className="dashboard">
      <h2>Área do Funcionário</h2>
      <div className="today-appointments">
        <h3>Serviços de Hoje</h3>
        <ul>
          {appointments.map(app => (
            <li key={app.id}>
              <div>
                <strong>{new Date(app.date).toLocaleTimeString()}</strong>
                <span>Cliente ID: {app.userId}</span>
                <span>Status: {app.status}</span>
              </div>
              {app.status === 'AGENDADO' && (
                <button onClick={() => handleComplete(app.id)}>
                  Marcar como Concluído
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
