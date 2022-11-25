import '../styles/App.scss';
import logoCards from '../images/logo-awesome.svg';
import logoAdalab from '../images/logo-adalab.png';
import { useState } from 'react';
import callToApi from '../services/api';

function App() {
  // /****VARIABLES****/
  const [data, setData] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  const [activeSection, setActiveSection] = useState('design');
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [cardUrl, setCardUrl] = useState('');

  // /****END VARIABLES****/

  // /*****FUNCIONES MANEJADORAS DE EVENTOS*****/
  const handleSubmit = (ev) => {
    // Aquí detenemos el envío del formulario
    ev.preventDefault();
  };

  const handleInput = (event) => {
    let inputValue = event.target.value;
    const inputName = event.target.name;
    if (inputName === 'phone') {
      const regExPhone = /[6-9]{1}[0-9]{8}/; //Se añade una comprobación para que vea si el valor del teléfono cumple con la expresión regular dada
      if (regExPhone.test(inputValue) || inputValue === '') {
        setErrorPhone(false);
      } else {
        //Si el valor no cumple con la expresión regular es visible el siguiente mensaje
        setErrorPhone(true);
      }
    } else if (inputName === 'email') {
      const regExEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; //Se añade una comprobación para que vea si el valor del teléfono cumple con la expresión regular dada
      if (regExEmail.test(inputValue) || inputValue === '') {
        setErrorEmail(false);
      } else {
        //Si el valor no cumple con la expresión regular es visible el siguiente mensaje
        setErrorEmail(true);
      }
    }
    // else if (inputName === 'linkedin') {
    //   const linkedinArray = inputValue.split('/');
    //   const length = linkedinArray.length;
    //   if (inputValue.endsWith('/')) {
    //     inputValue = linkedinArray[length - 2];
    //   } else {
    //     inputValue = linkedinArray[length - 1];
    //   }
    // } else if (inputName === 'github') {
    //   inputValue = inputValue.replace('@', '');
    // }
    setData({ ...data, [inputName]: inputValue });
  };

  const handleClickReset = (event) => {
    event.preventDefault();
    setData({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
  };

  const handleClickDesign = (event) => {
    setActiveSection('design');
  };

  const handleClickFill = (event) => {
    setActiveSection('fill');
  };

  const handleClickShare = (event) => {
    setActiveSection('share');
  };

  const handleClickCreateCard = (event) => {
    event.preventDefault();
    callToApi(data).then((response) => setCardUrl(response));
  };

  // /*****END FUNCIONES MANEJADORAS DE EVENTOS*****/

  // /*****FUNCIONALIDADES*****/
  const previewText = (property, defaultText) => {
    if (data[property]) {
      return data[property];
    } else {
      return defaultText;
    }
  };

  const errorPhoneText = (errorMsg) => {
    if (errorPhone) {
      return errorMsg;
    }
  };

  const errorEmailText = (errorMsg) => {
    if (errorEmail) {
      return errorMsg;
    }
  };

  // /*****END FUNCIONALIDADES*****/

  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logoCards} alt="logo" />
      </header>
      <main className="mainCreate">
        <section className="preview ">
          <div className="preview__align">
            <button className="preview__button" onClick={handleClickReset}>
              <i className="fa-regular fa-trash-can preview__button--can"></i>{' '}
              Reset
            </button>
            <article
              className={`preview__container js-mother-of-palettes palette-${data.palette}`}>
              <h2 className="preview__name">
                {previewText('name', 'Nombre Apellidos')}
              </h2>
              <h3 className="preview__job">
                {previewText('job', 'Front End Developer')}
              </h3>
              <div className="preview__img js__profile-image"></div>
              <ul className="preview__icons">
                <li>
                  <a href={`tel:${data.phone}`} className="telephone">
                    <i className="fa-solid fa-mobile-screen-button preview__icons--color"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${data.email}`}
                    target="_blank"
                    className="emailadress">
                    <i className="fa-regular fa-envelope preview__icons--color"></i>
                  </a>
                </li>
                <li>
                  <a href={data.linkedin} target="_blank" className="linkedin">
                    <i className="fa-brands fa-linkedin-in preview__icons--color"></i>
                  </a>
                </li>
                <li>
                  <a href={data.github} target="_blank" className="github">
                    <i className="fa-brands fa-github-alt preview__icons--color"></i>
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
        <form className="container-form" onSubmit={handleSubmit}>
          <fieldset className="design">
            <div className="design__title" onClick={handleClickDesign}>
              <legend className="design__legend">
                <i className="fa-regular fa-object-ungroup design__legend--icon"></i>
                Diseña
              </legend>
              <i className="fa-solid fa-angle-up legend--arrow--up"></i>
              <i className="fa-solid fa-angle-down collapse legend--arrow--down"></i>
            </div>
            <section
              className={`design__palette js-design ${
                activeSection !== 'design' ? 'collapse' : ''
              }`}>
              <span className="design__palette__span"> Colores</span>
              <div className="design__palette__radio">
                <label
                  htmlFor="green"
                  className="design__palette__radio--colors">
                  <input
                    className="js-btn-green"
                    type="radio"
                    name="palette"
                    id="1"
                    value="1"
                    onChange={handleInput}
                    checked={data.palette === '1'}
                  />
                  <div className="design__palette__green"></div>
                </label>
                <label htmlFor="red" className="design__palette__radio--colors">
                  <input
                    className="js-btn-red"
                    type="radio"
                    name="palette"
                    id="2"
                    value="2"
                    onChange={handleInput}
                    checked={data.palette === '2'}
                  />
                  <div className="design__palette__red"> </div>
                </label>
                <label
                  htmlFor="grey"
                  className="design__palette__radio--colors">
                  <input
                    className="js-btn-grey"
                    type="radio"
                    name="palette"
                    id="3"
                    value="3"
                    onChange={handleInput}
                    checked={data.palette === '3'}
                  />
                  <div className="design__palette__grey"></div>
                </label>
              </div>
            </section>
            <div className="border_button"></div>
          </fieldset>
          <fieldset className="fill">
            <div className="fill__title" onClick={handleClickFill}>
              <legend className="fill__legend">
                <i className="fa-regular fa-keyboard fill__legend--icon"></i>{' '}
                Rellena
              </legend>
              <i className="fa-solid fa-angle-up collapse legend--arrow--up"></i>
              <i className="fa-solid fa-angle-down legend--arrow--down"></i>
            </div>

            <div
              className={`js-fill ${
                activeSection !== 'fill' ? 'collapse' : ''
              }`}>
              <label htmlFor="name" className="fill__label fill__label--name">
                <span className="fill__label__text--name">
                  {' '}
                  Nombre completo<span className="asterisc">*</span>
                </span>
                <input
                  className="fill__input fill__input--name js-input js_input_name"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ej: Sally Jill"
                  onChange={handleInput}
                  required
                  value={data.name}
                />
              </label>
              <label
                htmlFor="job-position"
                className="fill__label fill__label--jobposition">
                <span className="fill__label__text--jobposition">
                  Puesto<span className="asterisc">*</span>
                </span>
                <input
                  className="fill__input fill__input--jobposition js-input js_input_job"
                  type="text"
                  name="job"
                  id="job-position"
                  placeholder="Ej: Front-end unicorn"
                  onChange={handleInput}
                  required
                  value={data.job}
                />
              </label>
              <label
                htmlFor="profile-image"
                className="fill__label fill__label--profileimage">
                <div className="fill__label__container ">
                  <label
                    className="fill__label__container--button"
                    htmlFor="img-selector">
                    Añadir imagen
                  </label>
                  <input
                    type="file"
                    name="photo"
                    id="img-selector"
                    className="action__hiddenField js__profile-upload-btn js_input_photo fill__label__text--profileimage collapse"
                    required
                  />

                  <div className="fill__label__container--box js__profile-preview"></div>
                </div>
              </label>
              <label htmlFor="email" className="fill__label fill__label--email">
                <span className="fill__label__text--email">
                  Email<span className="asterisc">*</span>
                </span>
                <input
                  className="fill__input fill__input--email js-input js_input_email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ej: sally.hill@gmail.com"
                  onChange={handleInput}
                  required
                  value={data.email}
                />
              </label>
              <p className="error-msg">
                {' '}
                {errorEmailText('El email que has introducido no es correcto.')}
              </p>
              <label
                htmlFor="phone"
                className="fill__label fill__input--telefono">
                <span className="fill__label__text--telefono">Teléfono</span>
                <input
                  className="fill__input fill__input--telefono js-input js_input_phone"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Ej: 555-55-55-55"
                  onChange={handleInput}
                  value={data.phone}
                />
              </label>
              <p className="error-msg">
                {' '}
                {errorPhoneText(
                  'El teléfono que has introducido no es correcto.'
                )}
              </p>
              <label
                htmlFor="linkedin"
                className="fill__label fill__label--linkedin">
                <span className="fill__label__text--linkedin">
                  Linkedin<span className="asterisc">*</span>
                </span>
                <input
                  className="fill__input fill__input--linkedin js-input js_input_linkedin"
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  placeholder="Ej: linkedin.com/in/sally-hill"
                  onChange={handleInput}
                  required
                  value={data.linkedin}
                />
              </label>
              <label
                htmlFor="github"
                className="fill__label fill__label--github">
                <span className="fill__label__text--github">
                  Github<span className="asterisc">*</span>
                </span>
                <input
                  className="fill__input fill__input--github js-input js_input_github"
                  type="text"
                  name="github"
                  id="github"
                  placeholder="Ej: @sally-hill"
                  onChange={handleInput}
                  required
                  value={data.github}
                />
              </label>
            </div>
            <div className="border_button"></div>
          </fieldset>
          <fieldset className="form">
            <div className="form__share" onClick={handleClickShare}>
              <legend className="form__legend">
                <i className="fa-solid fa-share-nodes form__legend--icon"></i>
                Comparte
              </legend>
              <i className="fa-solid fa-angle-up collapse legend--arrow--up comparte"></i>
              <i className="fa-solid fa-angle-down legend--arrow--down"></i>
            </div>

            <div
              className={`js-share ${
                activeSection !== 'share' ? 'collapse' : ''
              }`}>
              <label htmlFor="create-card" className="form__label">
                <div className="form__box js_form_box">
                  <i className="fa-regular fa-address-card form__box--icon"></i>
                  <button
                    className="form__box--button js_button_submit"
                    onClick={handleClickCreateCard}>
                    Crear tarjeta
                  </button>
                  {/* <input type="submit" name="create-card"
                                id="create-card" value="Crear tarjeta" className="form__box--button js_button_submit" /> */}
                </div>
              </label>
              <div className="CardContainer js_card_container">
                <h3 className="CardContainer__card js_card_title"></h3>
                <h4 className="CardContainer__url js_url">{cardUrl}</h4>
                <div className="container__twitter js_container__twitter collapse">
                  <label htmlFor="compartir-twitter">
                    <a href="" target="_blank" className="js_twitter">
                      <i className="fa-brands fa-twitter container__twitter__icon"></i>
                      <input
                        type="submit"
                        name="compartir-twitter"
                        id="compartir-twitter"
                        value="Compartir en twitter"
                        className="container__twitter__btn "
                      />
                    </a>
                  </label>
                </div>
              </div>
            </div>

            <div className="border_button"></div>
          </fieldset>
        </form>
      </main>
      <footer className="footer">
        <p className="footer__text">Awesome profile-cards @2022</p>
        <div className="footer__box">
          <img src={logoAdalab} alt="Adalab" className="footer__box--logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
