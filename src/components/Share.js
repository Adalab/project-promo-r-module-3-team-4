import './../styles/layout/Share.scss';
const Share = (props) => {
  const handleClickShare = (ev) => {
    props.handleClickShare();
  };
  const handleClickButtonCreate = (event) => {
    event.preventDefault();
    props.handleClickCreateCard();
  };
  return (
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
        className={`js-share form__create ${
          props.activeSection !== 'share' ? 'collapse' : ''
        }`}>
        <button
          className={`form__create--button js_button_submit ${
            props.cardResponseFetch.success ? 'successBtn' : ''
          }`}
          onClick={handleClickButtonCreate}
          disabled={props.cardResponseFetch.success}>
          <i className="fa-regular fa-address-card form__create--icon"></i>
          Crear tarjeta
        </button>
        <div
          className={`CardContainer js_card_container ${
            props.cardResponseFetch ? '' : 'collapse'
          }`}>
          {!props.cardResponseFetch.success ? (
            <p>{props.cardResponseFetch.error}</p>
          ) : (
            <div className="container__twitter">
              <h3 className="CardContainer__card js_card_title">
                La tarjeta ha sido creada:
              </h3>
              <a
                className="CardContainer__url"
                href={props.cardResponseFetch.cardURL}
                target="_blank"
                rel="noreferrer">
                {props.cardResponseFetch.cardURL}
              </a>
              <a
                className="container__twitter__btn"
                href={`https://twitter.com/intent/tweet?text=¡Tengo%20una%20nueva%20tarjeta%20de%20visita!%20&hashtags=LasDuquesas,Adalab,PromoRadia&url=${props.cardResponseFetch.cardURL}`}
                data-size="large"
                target="_blank"
                rel="noreferrer">
                <i class="fa-brands fa-twitter container__twitter__icon"></i>
                Compartir en twitter
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="border_button"></div>
    </fieldset>
  );
};
export default Share;
