// Simula um banco de dados em memória
const db = {
    users: [
      { id: 1, name: "Admin", email: "admin@email.com", password: "123456", role: "ADMIN" },
      { id: 2, name: "Funcionário", email: "func@email.com", password: "123456", role: "FUNCIONARIO" },
      { id: 3, name: "Cliente", email: "cliente@email.com", password: "123456", role: "CLIENTE" },
    ],
    services: [
      { id: 1, name: "Lavagem Básica", price: 30.0, duration: 30 },
      { id: 2, name: "Lavagem Completa", price: 60.0, duration: 60 },
    ],
    appointments: [
      { id: 1, date: "2024-06-20T10:00:00", status: "AGENDADO", serviceId: 1, userId: 3 },
    ],
  };
  
  // Métodos para manipulação dos dados
  module.exports = {
    // Usuários
    getUserByEmail: (email) => db.users.find((user) => user.email === email),
    addUser: (user) => {
      user.id = db.users.length + 1;
      db.users.push(user);
      return user;
    },
  
    // Serviços
    getServices: () => db.services,
    addService: (service) => {
      service.id = db.services.length + 1;
      db.services.push(service);
      return service;
    },
  
    // Agendamentos
    getAppointments: () => db.appointments,
    getAppointmentsByUser: (userId) => db.appointments.filter((app) => app.userId === userId),
    getTodayAppointments: () => {
      const today = new Date().toISOString().split("T")[0];
      return db.appointments.filter((app) => app.date.startsWith(today));
    },
    addAppointment: (appointment) => {
      appointment.id = db.appointments.length + 1;
      appointment.status = "AGENDADO";
      db.appointments.push(appointment);
      return appointment;
    },
    updateAppointmentStatus: (id, status) => {
      const appointment = db.appointments.find((app) => app.id === id);
      if (appointment) appointment.status = status;
      return appointment;
    },
  };