import '../styles/layout/Header.scss';
import logoCards from '../images/logo-awesome.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoCards} alt="logo" />
    </header>
  );
}

export default Header;
