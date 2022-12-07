import Header from './Header';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Reset from './Reset';
import './../styles/layout/Card.scss';
const Card = (props) => {
  return (
    <>
      <Header />
      <main className="mainCreate">
        <section className="preview ">
          <div className="preview__align">
            <Reset handleClickReset={props.handleClickReset}></Reset>
            <CardPreview data={props.data} />
          </div>
        </section>
        <form className="container-form" onSubmit={props.handleSubmit}>
          <Design
            handleInput={props.handleInput}
            handleClickDesign={props.handleClickDesign}
            palette={props.data.palette}
            activeSection={props.activeSection}></Design>
          <Fill
            handleInput={props.handleInput}
            handleClickFill={props.handleClickFill}
            data={props.data}
            activeSection={props.activeSection}
            errorPhone={props.errorPhone}
            errorEmail={props.errorEmail}
            handleImage={props.handleImage}
          />
          <Share
            handleClickCreateCard={props.handleClickCreateCard}
            handleClickShare={props.handleClickShare}
            activeSection={props.activeSection}
            cardResponseFetch={props.cardResponseFetch}
          />
        </form>
      </main>
    </>
  );
};
export default Card;
