const Design = (props) => {
  const handleChange = (ev) => {
    props.handleInput({ name: ev.target.name, value: ev.target.value });
  };
  const handleClick = (ev) => {
    props.handleClickDesign();
  };

  return (
    <fieldset className="design">
      <div className="design__title" onClick={handleClick}>
        <legend className="design__legend">
          <i className="fa-regular fa-object-ungroup design__legend--icon"></i>
          Diseña
        </legend>
        <i className="fa-solid fa-angle-up legend--arrow--up"></i>
        <i className="fa-solid fa-angle-down collapse legend--arrow--down"></i>
      </div>
      <section
        className={`design__palette js-design ${
          props.activeSection !== 'design' ? 'collapse' : ''
        }`}>
        <span className="design__palette__span"> Colores</span>
        <div className="design__palette__radio">
          <label htmlFor="green" className="design__palette__radio--colors">
            <input
              className="js-btn-green"
              type="radio"
              name="palette"
              id="1"
              value="1"
              onChange={handleChange}
              checked={props.palette === '1'}
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
              onChange={handleChange}
              checked={props.palette === '2'}
            />
            <div className="design__palette__red"> </div>
          </label>
          <label htmlFor="grey" className="design__palette__radio--colors">
            <input
              className="js-btn-grey"
              type="radio"
              name="palette"
              id="3"
              value="3"
              onChange={handleChange}
              checked={props.palette === '3'}
            />
            <div className="design__palette__grey"></div>
          </label>
        </div>
      </section>

      <div className="border_button"></div>
    </fieldset>
  );
};
export default Design;
