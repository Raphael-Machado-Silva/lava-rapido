import { Link } from 'react-router-dom'
import { FaCar, FaCalendarAlt, FaPhone, FaStar } from 'react-icons/fa'
import './Home.css'

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
  <div className="testimonial-grid">
    {/* Cliente 1 */}
    <div className="testimonial-card">
      <img 
        src="https://randomuser.me/api/portraits/women/44.jpg" 
        alt="Cliente Maria" 
        className="client-photo"
      />
      <div className="stars">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
      <p className="testimonial-text">
        Melhor lava jato da região! Meu carro nunca ficou tão limpo. 
        O atendimento é excelente e super pontual.
      </p>
      <p className="client-name">Maria Silva</p>
      <p className="client-role">Cliente há 2 anos</p>
    </div>

    {/* Cliente 2 */}
    <div className="testimonial-card">
      <img 
        src="https://randomuser.me/api/portraits/men/32.jpg" 
        alt="Cliente João" 
        className="client-photo"
      />
      <div className="stars">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
      <p className="testimonial-text">
        Serviço rápido e de qualidade. Sempre que preciso lavar meu carro, 
        venho aqui. Recomendo para todos!
      </p>
      <p className="client-name">João Santos</p>
      <p className="client-role">Cliente há 1 ano</p>
    </div>

    {/* Cliente 3 */}
    <div className="testimonial-card">
      <img 
        src="https://randomuser.me/api/portraits/women/68.jpg" 
        alt="Cliente Ana" 
        className="client-photo"
      />
      <div className="stars">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
      <p className="testimonial-text">
        Adoro o cuidado que têm com os detalhes. Meu carro parece novo 
        cada vez que passo por aqui.
      </p>
      <p className="client-name">Ana Oliveira</p>
      <p className="client-role">Cliente há 3 anos</p>
    </div>
    
  </div>
</section>
    </div>
  )
}

export default Home