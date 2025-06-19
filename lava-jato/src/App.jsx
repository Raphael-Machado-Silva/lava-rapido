import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ClientDashboard from './pages/ClientDashboard'
import AdminDashboard from './pages/AdminDashboard'
import './index.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)

  const handleLogin = (role) => {
    setIsAuthenticated(true)
    setUserRole(role)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserRole(null)
  }

  return (
    <div className="app">
      <Header 
        isAuthenticated={isAuthenticated} 
        userRole={userRole} 
        onLogout={handleLogout} 
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/client" 
            element={
              isAuthenticated && userRole === 'client' ? 
              <ClientDashboard /> : 
              <Login onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/admin" 
            element={
              isAuthenticated && userRole === 'admin' ? 
              <AdminDashboard /> : 
              <Login onLogin={handleLogin} />
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App