import './../styles/pages/Landing.scss'
import { NavLink } from 'react-router-dom';
import logoCards from '../images/logo-awesome.svg';
import flower from '../images/flower2.png';
const Landing = () => {
    return (

        <main className="main">
        <div className="preview__card--flowers">
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
      </div>
    <img src={logoCards} alt="Logo principal" className="main__img"/>
    <h1 className="main__title">
        Crea tu tarjeta de visita
    </h1>
    <p className="main__text">
        Crea mejores contactos profesionales de forma fácil y cómoda
    </p>

    <ul className="main__list">
        <li className="main__list--item">
            <i className="fa-regular fa-object-ungroup main__list--icon"></i> Diseña
        </li>
        <li className="main__list--item">
            <i className="fa-regular fa-keyboard main__list--icon"></i> Rellena
        </li>
        <li className="main__list--item">
            <i className="fa-solid fa-share-nodes main__list--icon"></i> Comparte
        </li>
    </ul>

    <NavLink to="/card" className="main__button">Comenzar</NavLink>
  </main>
    )
};
export default Landing;