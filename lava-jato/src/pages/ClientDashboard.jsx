// src/ClientDashboard.jsx
import { useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useAppointments } from '../context/AppointmentsContext'

const ClientDashboard = () => {
  const { appointments, addAppointment } = useAppointments()
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [service, setService] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const availableTimes = [
    '08:00', '09:00', '10:00', '11:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const serviceOptions = [
    { type: 'Lavagem Simples', price: 30 },
    { type: 'Lavagem Completa', price: 50 },
    { type: 'Higienização Interna', price: 80 },
    { type: 'Polimento', price: 120 }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    const selectedService = serviceOptions.find(s => s.type === service)

    if (!selectedService) {
      alert('Selecione um tipo de serviço')
      return
    }

    const newAppointment = {
      id: Date.now(),
      date,
      time,
      brand,
      model,
      year,
      service: selectedService.type,
      price: selectedService.price,
      clientName: 'Cliente Logado',
      phone: '(00) 00000-0000',
      createdAt: new Date().toISOString()
    }

    addAppointment(newAppointment)
    setSuccessMessage('Agendamento realizado com sucesso!')

    // Limpar campos
    setDate('')
    setTime('')
    setBrand('')
    setModel('')
    setYear('')
    setService('')

    setTimeout(() => setSuccessMessage(''), 3000)
  }

  return (
    <div className="dashboard-container">
      <h2>Agendar Lavagem</h2>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label>Data:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={format(new Date(), 'yyyy-MM-dd')}
            required
          />
        </div>

        <div className="form-group">
          <label>Horário:</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Selecione um horário</option>
            {availableTimes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Tipo de Serviço:</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Selecione um serviço</option>
            {serviceOptions.map(s => (
              <option key={s.type} value={s.type}>
                {s.type} - R$ {s.price}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Marca do Carro:</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Modelo:</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Ano:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max={new Date().getFullYear()}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Agendar</button>
      </form>

      <div className="my-appointments">
        <h3>Meus Agendamentos</h3>
        {appointments.length === 0 ? (
          <p>Nenhum agendamento realizado.</p>
        ) : (
          <ul className="appointments-list">
            {appointments.map((app, index) => (
              <li key={index} className="appointment-item">
                <p><strong>Data:</strong> {format(new Date(app.date), 'PPP', { locale: ptBR })}</p>
                <p><strong>Horário:</strong> {app.time}</p>
                <p><strong>Serviço:</strong> {app.service} (R$ {app.price})</p>
                <p><strong>Veículo:</strong> {app.brand} {app.model} ({app.year})</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ClientDashboard
