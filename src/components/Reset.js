import './../styles/layout/Reset.scss'
function Reset(props) {
  const handleClickResetCard = (event) => {
    event.preventDefault();
    props.handleClickReset();
};
  return (<button className="preview__button" onClick={handleClickResetCard}>
  <i className="fa-regular fa-trash-can preview__button--can"></i>{' '}
  Reset
</button>);
}

export default Reset;
