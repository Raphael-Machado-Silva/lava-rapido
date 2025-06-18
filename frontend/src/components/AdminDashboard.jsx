import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', price: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'ADMIN') {
      navigate('/');
      return;
    }

    const loadData = async () => {
      const [appsRes, servicesRes] = await Promise.all([
        axios.get('http://localhost:3001/appointments'),
        axios.get('http://localhost:3001/services')
      ]);
      setAppointments(appsRes.data);
      setServices(servicesRes.data);
    };

    loadData();
  }, []);

  const handleAddService = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3001/services', {
      name: newService.name,
      price: parseFloat(newService.price),
      duration: 30
    });
    setServices([...services, res.data]);
    setNewService({ name: '', price: '' });
  };

  return (
    <div className="dashboard">
      <h2>Área do Administrador</h2>

      <div className="services-management">
        <h3>Gerenciar Serviços</h3>
        <form onSubmit={handleAddService}>
          <input
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            placeholder="Nome do serviço"
            required
          />
          <input
            type="number"
            step="0.01"
            value={newService.price}
            onChange={(e) => setNewService({ ...newService, price: e.target.value })}
            placeholder="Preço"
            required
          />
          <button type="submit">Adicionar Serviço</button>
        </form>

        <ul>
          {services.map(service => (
            <li key={service.id}>
              {service.name} - R${service.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="all-appointments">
        <h3>Todos os Agendamentos</h3>
        <ul>
          {appointments.map(app => (
            <li key={app.id}>
              <div>
                <strong>{new Date(app.date).toLocaleString()}</strong>
                <span>Cliente ID: {app.userId}</span>
                <span>Status: {app.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
