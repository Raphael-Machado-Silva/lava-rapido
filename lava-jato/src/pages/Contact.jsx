import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h1 className="contact-title">Entre em Contato</h1>
            <p className="contact-subtitle">Estamos prontos para atender você da melhor forma possível</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Endereço</h3>
                <p>Rua do Lava Jato, 123<br />Bairro Brilhante<br />Cidade Limpa - SP</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <h3>Telefone</h3>
                <p>(11) 98765-4321<br />(11) 3456-7890</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <p>contato@lavajatoexpress.com<br />sac@lavajatoexpress.com</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaClock />
                </div>
                <h3>Funcionamento</h3>
                <p>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 13h</p>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <h2 className="form-title">Envie sua Mensagem</h2>
                
                <div className="form-group">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Seu Nome</label>
                </div>
                
                <div className="form-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Seu Email</label>
                </div>
                
                <div className="form-group">
                  <input type="tel" id="phone" placeholder=" " />
                  <label htmlFor="phone">Telefone (Opcional)</label>
                </div>
                
                <div className="form-group">
                  <textarea id="message" rows="5" placeholder=" " required></textarea>
                  <label htmlFor="message">Sua Mensagem</label>
                </div>
                
                <button type="submit" className="submit-button">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;