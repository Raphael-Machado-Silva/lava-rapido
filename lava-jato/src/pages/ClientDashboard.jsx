import { useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useAppointments } from '../context/AppointmentsContext'
import { FaCalendarAlt, FaCar, FaClock, FaTools, FaCheckCircle } from 'react-icons/fa'
import './ClientDashboard.css'

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
    <div className="client-dashboard">
      <header className="dashboard-header">
        <h1><FaCar /> Área do Cliente</h1>
        <p>Agende seu serviço e visualize seus agendamentos</p>
      </header>

      <div className="dashboard-content">
        <section className="appointment-section">
          <div className="section-header">
            <FaCalendarAlt />
            <h2>Agendar Lavagem</h2>
          </div>

          {successMessage && (
            <div className="success-message">
              <FaCheckCircle /> {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-grid">
              <div className="input-field">
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={format(new Date(), 'yyyy-MM-dd')}
                  placeholder=" "
                  required
                />
                <label htmlFor="date" className="input-label">
                  <FaCalendarAlt />
                  <span>Data</span>
                </label>
              </div>

              <div className="input-field">
                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <option value=""></option>
                  {availableTimes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <label htmlFor="time" className="input-label">
                  <FaClock />
                  <span>Horário</span>
                </label>
              </div>

              <div className="input-field">
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value=""></option>
                  {serviceOptions.map(s => (
                    <option key={s.type} value={s.type}>
                      {s.type} - R$ {s.price.toFixed(2)}
                    </option>
                  ))}
                </select>
                <label htmlFor="service" className="input-label">
                  <FaTools />
                  <span>Tipo de Serviço</span>
                </label>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="brand" className="input-label">
                  <FaCar />
                  <span>Marca do Carro</span>
                </label>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  id="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="model" className="input-label">
                  <FaCar />
                  <span>Modelo</span>
                </label>
              </div>

              <div className="input-field">
                <input
                  type="number"
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  min="1900"
                  max={new Date().getFullYear()}
                  placeholder=" "
                  required
                />
                <label htmlFor="year" className="input-label">
                  <FaCar />
                  <span>Ano</span>
                </label>
              </div>
            </div>

            <button type="submit" className="submit-btn-client">
              Confirmar Agendamento
            </button>
          </form>
        </section>

        <section className="appointments-section">
          <div className="section-header">
            <FaCalendarAlt />
            <h2>Meus Agendamentos</h2>
          </div>

          {appointments.length === 0 ? (
            <div className="empty-appointments">
              <p>Nenhum agendamento realizado.</p>
            </div>
          ) : (
            <div className="appointments-grid">
              {appointments.map((app, index) => (
                <div key={index} className="appointment-card">
                  <div className="card-header">
                    <h3>{app.service}</h3>
                    <span className="price-tag">R$ {app.price.toFixed(2)}</span>
                  </div>
                  <div className="card-body">
                    <p><FaCalendarAlt /> {format(new Date(app.date), 'PPP', { locale: ptBR })}</p>
                    <p><FaClock /> {app.time}</p>
                    <p><FaCar /> {app.brand} {app.model} ({app.year})</p>
                  </div>
                  <div className="card-footer">
                    <span className="status-badge">Confirmado</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default ClientDashboard