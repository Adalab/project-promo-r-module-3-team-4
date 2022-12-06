import '../styles/layout/Fill.scss';

const Fill = (props) => {
  const handleChange = (ev) => {
    props.handleInput({ name: ev.target.name, value: ev.target.value });
  };
  const handleClickFill = (ev) => {
    props.handleClickFill();
  };
  const errorPhoneText = (errorMsg) => {
    if (props.errorPhone) {
      return errorMsg;
    }
  };

  const errorEmailText = (errorMsg) => {
    if (props.errorEmail) {
      return errorMsg;
    }
  };

  return (
    <fieldset className="fill">
      <div className="fill__title" onClick={handleClickFill}>
        <legend className="fill__legend">
          <i className="fa-regular fa-keyboard fill__legend--icon"></i> Rellena
        </legend>
        <i
          className={`fa-solid fa-angle-down arrow ${
            props.activeSection === 'fill' ? 'arrow-up' : ''
          }`}></i>
      </div>

      <div
        className={`js-fill ${
          props.activeSection !== 'fill' ? 'collapse' : ''
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
            onChange={handleChange}
            required
            value={props.data.name}
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
            onChange={handleChange}
            required
            value={props.data.job}
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
            onChange={handleChange}
            required
            value={props.data.email}
          />
        </label>
        <p className="error-msg">
          {' '}
          {errorEmailText('El email que has introducido no es correcto.')}
        </p>
        <label htmlFor="phone" className="fill__label fill__input--telefono">
          <span className="fill__label__text--telefono">Teléfono</span>
          <input
            className="fill__input fill__input--telefono js-input js_input_phone"
            type="text"
            name="phone"
            id="phone"
            placeholder="Ej: 555-55-55-55"
            onChange={handleChange}
            value={props.data.phone}
          />
        </label>
        <p className="error-msg">
          {' '}
          {errorPhoneText('El teléfono que has introducido no es correcto.')}
        </p>
        <label htmlFor="linkedin" className="fill__label fill__label--linkedin">
          <span className="fill__label__text--linkedin">
            Linkedin<span className="asterisc">*</span>
          </span>
          <input
            className="fill__input fill__input--linkedin js-input js_input_linkedin"
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="Ej: linkedin.com/in/sally-hill"
            onChange={handleChange}
            required
            value={props.data.linkedin}
          />
        </label>
        <label htmlFor="github" className="fill__label fill__label--github">
          <span className="fill__label__text--github">
            Github<span className="asterisc">*</span>
          </span>
          <input
            className="fill__input fill__input--github js-input js_input_github"
            type="text"
            name="github"
            id="github"
            placeholder="Ej: @sally-hill"
            onChange={handleChange}
            required
            value={props.data.github}
          />
        </label>
      </div>
      <div className="border_button"></div>
    </fieldset>
  );
};
export default Fill;
