const Services = () => {
    const services = [
      { name: 'Lavagem Simples', price: 'R$ 30,00', description: 'Lavagem externa com shampoo automotivo' },
      { name: 'Lavagem Completa', price: 'R$ 60,00', description: 'Lavagem interna e externa com aspirador' },
      { name: 'Lavagem Premium', price: 'R$ 90,00', description: 'Lavagem completa + cera + limpeza de vidros' },
      { name: 'Polimento', price: 'R$ 120,00', description: 'Remoção de riscos leves e recuperação da pintura' },
      { name: 'Higienização Interna', price: 'R$ 80,00', description: 'Limpeza profunda de bancos e carpetes' },
    ]
  
    return (
      <div className="services-page">
        <h2>Nossos Serviços e Preços</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.name}</h3>
              <p className="price">{service.price}</p>
              <p className="description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Services