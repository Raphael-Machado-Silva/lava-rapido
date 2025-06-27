import React, { useState } from 'react';
import { FaCar, FaShower, FaStar, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aboutImage1 from '../assets/about1.jpg';
import aboutImage2 from '../assets/about2.jpg';
import aboutImage3 from '../assets/about3.jpg';
import aboutImage4 from '../assets/about4.jpg';
import './About.css';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="about-hero-content">
          <h1>Excelência em Cada Detalhe</h1>
          <p>Conheça nossa paixão por deixar seu carro impecável</p>
        </div>
      </section>

      <section className="about-main">
        <div className="about-card">
          <div className="about-grid">
            <div className="about-content">
              <h2>Nossa História</h2>
              <div className="divider"></div>
              <p>
                Desde 2010, o Lava Jato Express transforma a experiência de cuidados automotivos. 
                Começamos pequenos, mas com grandes sonhos, e hoje somos referência em qualidade 
                e atendimento personalizado na região.
              </p>
              
              <div className="features-container">
                <div className="feature-card">
                  <FaCar className="feature-icon" />
                  <h3>+5.000 Carros</h3>
                  <p>Lavados com excelência</p>
                </div>
                <div className="feature-card">
                  <FaShower className="feature-icon" />
                  <h3>Produtos Premium</h3>
                  <p>Ecologicamente corretos</p>
                </div>
                <div className="feature-card">
                  <FaStar className="feature-icon" />
                  <h3>Equipe Certificada</h3>
                  <p>Profissionais especializados</p>
                </div>
              </div>

              <Link to="/services" className="cta-button">
                Ver Serviços e Preços <FaArrowRight className="arrow-icon" />
              </Link>
            </div>

            <div className="image-carousel">
            <div className="carousel-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="carousel-slide"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>

              <button className="carousel-button prev" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              <button className="carousel-button next" onClick={nextImage}>
                <FaChevronRight />
              </button>
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;