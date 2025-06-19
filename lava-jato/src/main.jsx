import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppointmentsProvider } from './context/AppointmentsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppointmentsProvider>
        <App />
      </AppointmentsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
