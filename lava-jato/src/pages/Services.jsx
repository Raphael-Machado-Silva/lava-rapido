import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { 
      name: 'Lavagem Premium', 
      price: 'R$ 90,00', 
      description: 'Lavagem completa + cera + limpeza de vidros',
      icon: '🌟',
      duration: '1.5 horas',
      bestFor: 'Preparação para eventos',
      featured: true
    },
    { 
      name: 'Lavagem Simples', 
      price: 'R$ 30,00', 
      description: 'Lavagem externa com shampoo automotivo',
      icon: '🚗',
      duration: '30 min',
      bestFor: 'Manutenção semanal',
      featured: false
    },
    { 
      name: 'Lavagem Completa', 
      price: 'R$ 60,00', 
      description: 'Lavagem interna e externa com aspirador',
      icon: '✨',
      duration: '1 hora',
      bestFor: 'Limpeza mensal',
      featured: false
    },
    { 
      name: 'Polimento', 
      price: 'R$ 120,00', 
      description: 'Remoção de riscos leves e recuperação da pintura',
      icon: '🔧',
      duration: '2 horas',
      bestFor: 'Renovação semestral',
      featured: false
    },
    { 
      name: 'Higienização Interna', 
      price: 'R$ 80,00', 
      description: 'Limpeza profunda de bancos e carpetes',
      icon: '🧼',
      duration: '1.5 horas',
      bestFor: 'Veículos com crianças/pets',
      featured: false
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-title">Nossos Serviços Exclusivos</h2>
        <p className="services-subtitle">Cuidado profissional para deixar seu veículo como novo</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.featured ? 'featured' : ''}`}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">{service.name}</h3>
            <div className="service-price">{service.price}</div>
            <p className="service-description">{service.description}</p>
            
            <div className="service-details">
              <div className="detail-item">
                <span className="detail-label">⏱️ Duração:</span>
                <span>{service.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">👍 Ideal para:</span>
                <span>{service.bestFor}</span>
              </div>
            </div>
            
            <button className="service-button">
              Agendar este serviço
            </button>
          </div>
        ))}
      </div>
      
      <div className="service-cta">
        <h3>Não encontrou o que precisa?</h3>
        <p>Entre em contato para um orçamento personalizado</p>
        <button className="cta-button">Fale conosco</button>
      </div>
    </section>
  );
};

export default Services;