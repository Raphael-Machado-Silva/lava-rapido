import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState('');
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'CLIENTE') {
      navigate('/');
      return;
    }

    axios.get(`http://localhost:3001/appointments/user/${user.id}`)
      .then(res => setAppointments(res.data));

    axios.get('http://localhost:3001/services')
      .then(res => {
        setServices(res.data);
        if (res.data.length > 0) setSelectedService(res.data[0].id);
      });
  }, []);

  const handleSchedule = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    await axios.post('http://localhost:3001/appointments', {
      date,
      serviceId: selectedService,
      userId: user.id
    });

    const res = await axios.get(`http://localhost:3001/appointments/user/${user.id}`);
    setAppointments(res.data);
    setDate('');
  };

  return (
    <div className="dashboard">
      <h2>Área do Cliente</h2>
      <div className="schedule-form">
        <h3>Agendar Lavagem</h3>
        <form onSubmit={handleSchedule}>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} - R${service.price.toFixed(2)}
              </option>
            ))}
          </select>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button type="submit">Agendar</button>
        </form>
      </div>

      <div className="appointments-list">
        <h3>Meus Agendamentos</h3>
        <ul>
          {appointments.map(app => (
            <li key={app.id}>
              <strong>{new Date(app.date).toLocaleString()}</strong>
              <span>Status: {app.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientDashboard;
