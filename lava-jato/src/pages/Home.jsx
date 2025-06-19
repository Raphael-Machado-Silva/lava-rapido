import { Link } from 'react-router-dom'
import { FaCar, FaCalendarAlt, FaPhone, FaStar } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Seu carro limpo e brilhando como novo!</h1>
          <p>Serviço profissional de lavagem automotiva com qualidade e rapidez.</p>
          <Link to="/services" className="cta-button">Conheça nossos serviços</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature">
          <FaCar className="feature-icon" />
          <h3>Lavagem Completa</h3>
          <p>Limpeza interna e externa com produtos premium.</p>
        </div>
        <div className="feature">
          <FaCalendarAlt className="feature-icon" />
          <h3>Agendamento Online</h3>
          <p>Agende no horário mais conveniente para você.</p>
        </div>
        <div className="feature">
          <FaPhone className="feature-icon" />
          <h3>Atendimento Rápido</h3>
          <p>Seu carro pronto em até 1 hora.</p>
        </div>
        <div className="feature">
          <FaStar className="feature-icon" />
          <h3>Qualidade Garantida</h3>
          <p>Mais de 10 anos de experiência no mercado.</p>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>O que nossos clientes dizem</h2>
        <div className="testimonial">
          <p>"Melhor lava jato da região! Sempre deixo meu carro aqui."</p>
          <p className="author">- João S.</p>
        </div>
        <div className="testimonial">
          <p>"Atendimento excelente e o carro fica impecável."</p>
          <p className="author">- Maria L.</p>
        </div>
      </section>
    </div>
  )
}

export default Home