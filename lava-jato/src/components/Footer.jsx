import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Lava Jato Express</h3>
          <p>Seu carro limpo e brilhando como novo!</p>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@lavajatoexpress.com</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>
        <div className="footer-section">
          <h3>Horário de Funcionamento</h3>
          <p>Seg-Sex: 8:00 - 18:00</p>
          <p>Sábado: 9:00 - 13:00</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Whatsapp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Lava Jato Express - Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
