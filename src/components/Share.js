

const Share = (props) => {
  const handleClickCollapse = (ev) => {
    props.handleClickShare();
  };
  const handleClickButtonCreate = (event) => {
    
    event.preventDefault();
    console.log('Estoy en Share');
    props.handleClickCreateCard();
  };
    return(
        <fieldset className="form">
        <div className="form__share" onClick={handleClickCollapse}>
          <legend className="form__legend">
            <i className="fa-solid fa-share-nodes form__legend--icon"></i>
            Comparte
          </legend>
          <i className="fa-solid fa-angle-up collapse legend--arrow--up comparte"></i>
          <i className="fa-solid fa-angle-down legend--arrow--down"></i>
        </div>

        <div
          className={`js-share ${
            props.activeSection !== 'share' ? 'collapse' : ''
          }`}>
          <label htmlFor="create-card" className="form__label">
            <div className="form__box js_form_box">
              <i className="fa-regular fa-address-card form__box--icon"></i>
              <button
                className="form__box--button js_button_submit"
                onClick={handleClickButtonCreate}>
                Crear tarjeta
              </button>
              {/* <input type="submit" name="create-card"
                            id="create-card" value="Crear tarjeta" className="form__box--button js_button_submit" /> */}
            </div>
          </label>
          <div className="CardContainer js_card_container">
            <h3 className="CardContainer__card js_card_title"></h3>
            {!props.cardResponseFetch.success ? (
              <p>{props.cardResponseFetch.error}</p>
            ) : (
              <>
                <a
                  className="CardContainer__url"
                  href={props.cardResponseFetch.cardURL}
                  target="_blank"
                  rel="noreferrer">
                  {props.cardResponseFetch.cardURL}
                </a>
                <div className="container__twitter js_container__twitter">
                  <label htmlFor="compartir-twitter">
                    <a
                      href=""
                      target="_blank"
                      className="js_twitter"
                      rel="noreferrer">
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
              </>
            )}
          </div>
        </div>

        <div className="border_button"></div>
      </fieldset> 
    )
};
export default Share;