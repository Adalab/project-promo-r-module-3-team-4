import logoAdalab from '../images/logo-adalab.png';
import './../styles/layout/Footer.scss'
const Footer = () => {

    return (
<footer className="footer">
        <p className="footer__text">Awesome profile-cards @2022</p>
        <div className="footer__box">
          <img src={logoAdalab} alt="Adalab" className="footer__box--logo" />
        </div>
      </footer>

    )
};
export default Footer;