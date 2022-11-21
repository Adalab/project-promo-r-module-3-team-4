import '../styles/App.scss';
import logoCards from '../images/logo-awesome.svg';
import logoAdalab from '../images/logo-adalab.png';

function App() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logoCards} alt="logo" />
      </header>
      <main className="mainCreate">
        <section className="preview ">
          <div className="preview__align">
            <button className="preview__button">
              <i className="fa-regular fa-trash-can preview__button--can"></i>{' '}
              Reset
            </button>
            <article className="preview__container js-mother-of-palettes">
              <h2 className="preview__name">Nombre apellido</h2>
              <h3 className="preview__job">Front-end unicorn</h3>
              <div className="preview__img js__profile-image"></div>
              <ul className="preview__icons">
                <li>
                  <a href="" className="telephone">
                    <i className="fa-solid fa-mobile-screen-button preview__icons--color"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" className="emailadress">
                    <i className="fa-regular fa-envelope preview__icons--color"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" className="linkedin">
                    <i className="fa-brands fa-linkedin-in preview__icons--color"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" className="github">
                    <i className="fa-brands fa-github-alt preview__icons--color"></i>
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
        <form className="container-form" action="">
          <fieldset className="design">
            <div className="design__title">
              <legend className="design__legend">
                <i className="fa-regular fa-object-ungroup design__legend--icon"></i>
                Diseña
              </legend>
              <i className="fa-solid fa-angle-up legend--arrow--up"></i>
              <i className="fa-solid fa-angle-down collapse legend--arrow--down"></i>
            </div>
            <section className="design__palette js-design">
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
                    checked
                    value="1"
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
                  />
                  <div className="design__palette__grey"></div>
                </label>
              </div>
            </section>
            <div className="border_button"></div>
          </fieldset>
          <fieldset className="fill">
            <div className="fill__title">
              <legend className="fill__legend">
                <i className="fa-regular fa-keyboard fill__legend--icon"></i>{' '}
                Rellena
              </legend>
              <i className="fa-solid fa-angle-up collapse legend--arrow--up"></i>
              <i className="fa-solid fa-angle-down legend--arrow--down"></i>
            </div>

            <div className="js-fill collapse">
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
                  required
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
                  required
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
                  required
                />
              </label>
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
                />
              </label>
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
                  required
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
                  required
                />
              </label>
            </div>
            <div className="border_button"></div>
          </fieldset>
          <fieldset className="form">
            <div className="form__share">
              <legend className="form__legend">
                <i className="fa-solid fa-share-nodes form__legend--icon"></i>
                Comparte
              </legend>
              <i className="fa-solid fa-angle-up collapse legend--arrow--up comparte"></i>
              <i className="fa-solid fa-angle-down legend--arrow--down"></i>
            </div>

            <div className="js-form collapse">
              <label htmlFor="create-card" className="form__label">
                <div className="form__box js_form_box">
                  <i className="fa-regular fa-address-card form__box--icon"></i>
                  <button className="form__box--button js_button_submit">
                    Crear tarjeta
                  </button>
                  {/* <input type="submit" name="create-card"
                                id="create-card" value="Crear tarjeta" className="form__box--button js_button_submit" /> */}
                </div>
              </label>
              <div className="CardContainer collapse js_card_container">
                <h3 className="CardContainer__card js_card_title"></h3>
                <h4 className="CardContainer__url js_url"></h4>
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
