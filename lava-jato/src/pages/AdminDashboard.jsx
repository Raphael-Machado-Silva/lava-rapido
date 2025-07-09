// src/AdminDashboard.jsx
import { useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useAppointments } from '../context/AppointmentsContext'
import './admin.css'

const AdminDashboard = () => {
  const { appointments, removeAppointment } = useAppointments()
  const [filterDate, setFilterDate] = useState('')

  const filteredAppointments = filterDate
    ? appointments.filter(app => app.date === filterDate)
    : appointments

  return (
    <div className="admin-dashboard">
      <h2>Painel Administrativo</h2>

      <div className="filters">
        <div className="form-group">
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          {filterDate && (
            <button
              onClick={() => setFilterDate('')}
              className="clear-filter"
            >
              Limpar filtro
            </button>
          )}
        </div>
      </div>

      {filteredAppointments.length === 0 ? (
        <p>Nenhum agendamento encontrado.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Horário</th>
              <th>Cliente</th>
              <th>Veículo</th>
              <th>Serviço</th>
              <th>Valor</th>
              <th>Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
      
          {filteredAppointments.map(app => (
            <tr key={app.id}>
              <td data-label="Data">{format(new Date(app.date), 'PPP', { locale: ptBR })}</td>
              <td data-label="Horário">{app.time}</td>
              <td data-label="Cliente">{app.clientName}</td>
              <td data-label="Veículo">{app.brand} {app.model} ({app.year})</td>
              <td data-label="Serviço">{app.service || '—'}</td>
              <td data-label="Valor">{app.price ? `R$ ${app.price}` : '—'}</td>
              <td data-label="Contato">{app.phone}</td>
              <td data-label="Ações">
                <button onClick={() => removeAppointment(app.id)} className="delete-btn">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AdminDashboard
