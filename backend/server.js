const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas de Autenticação
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = db.getUserByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  res.json({ user });
});

app.post("/register", (req, res) => {
  const { name, email, password, role = "CLIENTE" } = req.body;
  const userExists = db.getUserByEmail(email);

  if (userExists) {
    return res.status(400).json({ error: "Usuário já existe" });
  }

  const user = db.addUser({ name, email, password, role });
  res.status(201).json({ user });
});

// Rotas de Serviços
app.get("/services", (req, res) => {
  res.json(db.getServices());
});

app.post("/services", (req, res) => {
  const service = db.addService(req.body);
  res.status(201).json(service);
});

// Rotas de Agendamentos
app.get("/appointments", (req, res) => {
  res.json(db.getAppointments());
});

app.get("/appointments/user/:userId", (req, res) => {
  const appointments = db.getAppointmentsByUser(Number(req.params.userId));
  res.json(appointments);
});

app.get("/appointments/today", (req, res) => {
  const appointments = db.getTodayAppointments();
  res.json(appointments);
});

app.post("/appointments", (req, res) => {
  const appointment = db.addAppointment(req.body);
  res.status(201).json(appointment);
});

app.patch("/appointments/:id/status", (req, res) => {
  const { status } = req.body;
  const appointment = db.updateAppointmentStatus(Number(req.params.id), status);
  res.json(appointment);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});