import './style.css';
import Logo from '../../assets/logo.svg';
import LogoFace from '../../assets/facebook.svg';
import LogoInsta from '../../assets/instagram.svg';


function Footer() {
  return (
    <footer>
      <div className="left-footer">
        <div className="container-address">
          <strong>Endereço:</strong>
          <br />
          <span>Rua Cubos, 10</span>
          <span>Jardim Academy</span>
          <span>Salvador - Bahia - CEP 41820-021</span>
        </div>
        <div className="container-social">
          <img src={LogoFace} alt="Facebook" />
          <img src={LogoInsta} alt="Instagram" />
        </div>
      </div>
      <div className="vertical-line">

      </div>
      <div className="right-footer">
        <img src={Logo} alt="Logo" />
      </div>
    </footer >
  );
}

export default Footer;
