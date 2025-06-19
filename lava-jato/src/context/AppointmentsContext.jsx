// src/context/AppointmentsContext.jsx
import { createContext, useState, useContext } from 'react'

const AppointmentsContext = createContext()

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])

  const addAppointment = (appointment) => {
    setAppointments(prev => [...prev, appointment])
  }

  const removeAppointment = (id) => {
    setAppointments(prev => prev.filter(app => app.id !== id))
  }

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, removeAppointment }}>
      {children}
    </AppointmentsContext.Provider>
  )
}

export const useAppointments = () => useContext(AppointmentsContext)
