import '../styles/layout/CardPreview.scss';
import defaultPhoto1 from '../images/preview-girl.png';
import defaultPhoto2 from '../images/cat-programming.jpg';
import defaultPhoto3 from '../images/logo-adalab.png';

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
          <a href={`tel:${props.data.phone}`} className="telephone">
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
            href={props.data.linkedin}
            target="_blank"
            className="linkedin"
            rel="noreferrer">
            <i className="fa-brands fa-linkedin-in preview__icons--color"></i>
          </a>
        </li>
        <li>
          <a
            href={props.data.github}
            target="_blank"
            className="github"
            rel="noreferrer">
            <i className="fa-brands fa-github-alt preview__icons--color"></i>
          </a>
        </li>
      </ul>
    </article>
  );
}

export default CardPreview;
