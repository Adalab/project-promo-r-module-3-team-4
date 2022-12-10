import '../styles/layout/CardPreview.scss';
import defaultPhoto1 from '../images/preview-girl.png';
import defaultPhoto2 from '../images/cat-programming.jpg';
import defaultPhoto3 from '../images/logo-adalab.png';
import { NavLink } from 'react-router-dom';

import logoCards from '../images/logo-awesome.svg';

function CardPreview(props) {
  const defaultPhotos = [defaultPhoto1, defaultPhoto2, defaultPhoto3];
  const photo = props.data.photo
    ? props.data.photo
    : defaultPhotos[props.data.palette - 1];

  const previewText = (property, defaultText) => {
    if (props.data[property]) {
      return props.data[property];
    } else {
      return defaultText;
    }
  };
  const linkedinUrl = `https://www.linkedin.com/in/${props.getLinkedinUser()}`;
  const githubUrl = `https://github.com/${props.getGithubUser()}`;

  return (
  
    <article
      className={`preview__container js-mother-of-palettes palette-${props.data.palette}`}>
      <h2 className="preview__name">
        {previewText('name', 'Nombre Apellidos')}
      </h2>
      <h3 className="preview__job">
        {previewText('job', 'Front End Developer')}
      </h3>
      <div
        className="preview__img js__profile-image"
        style={{ backgroundImage: `url(${photo})` }}></div>
      <ul className="preview__icons">
        <li>
          <a
            href={`tel:${props.data.phone}`}
            target="_blank"
            className="telephone"
            rel="noreferrer">
            <i className="fa-solid fa-mobile-screen-button preview__icons--color"></i>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${props.data.email}`}
            target="_blank"
            className="emailadress"
            rel="noreferrer">
            <i className="fa-regular fa-envelope preview__icons--color"></i>
          </a>
        </li>
        <li>
          <a
            href={linkedinUrl}
            target="_blank"
            className="linkedin"
            rel="noreferrer">
            <i className="fa-brands fa-linkedin-in preview__icons--color"></i>
          </a>
        </li>
        <li>
          <a
            href={githubUrl}
            target="_blank"
            className="github"
            rel="noreferrer">
            <i className="fa-brands fa-github-alt preview__icons--color"></i>
          </a>
        </li>
        <li>
          <NavLink
            to="/"
            className="github"
            rel="noreferrer">
            <img className="preview__icons--color logoplus" src={logoCards} alt="logoDeshacer" />
          </NavLink>
        </li>
      </ul>
    </article>
  );
}

export default CardPreview;
