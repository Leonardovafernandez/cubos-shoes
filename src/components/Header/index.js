import './style.css';
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <div className="container">
        <h1>MODA MASCULINO</h1>
        <h3>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h3>
      </div>
      <img src={Logo} alt="Logo" />
    </header>
  );
}

export default Header;
