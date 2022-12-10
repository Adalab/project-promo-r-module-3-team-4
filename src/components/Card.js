import Header from './Header';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Reset from './Reset';
import './../styles/layout/Card.scss';
import flower from '../images/flower2.png'
const Card = (props) => {
  return (
    <>
      <div className="preview__card--flowers">
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
        <img alt="carnation flower" src={flower}/>
      </div>
      <Header />
      <main className="mainCreate">
        <section className="preview ">
          <div className="preview__align">
            <Reset handleClickReset={props.handleClickReset}></Reset>
            <CardPreview
              data={props.data}
              getLinkedinUser={props.getLinkedinUser}
              getGithubUser={props.getGithubUser}
            />
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
            isLoading={props.isLoading}
          />
        </form>
      </main>
    </>
  );
};
export default Card;
