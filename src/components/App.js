//styles
import '../styles/App.scss';
//images
import logoAdalab from '../images/logo-adalab.png';
import profilePhoto from '../images/cat-programming.jpg';
//services
import { useState } from 'react';
import callToApi from '../services/api';
//components
import Header from './Header';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

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
    photo: profilePhoto,
  });

  const [activeSection, setActiveSection] = useState('design');
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [cardResponseFetch, setCardResponseFetch] = useState({});

  // /****END VARIABLES****/

  // /*****FUNCIONES MANEJADORAS DE EVENTOS*****/
  const handleSubmit = (ev) => {
    // Aquí detenemos el envío del formulario
    ev.preventDefault();
  };

  const handleInput = (objInput) => {
    let inputValue = objInput.value;
    const inputName = objInput.name;
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

  const handleClickDesign = () => {
    setActiveSection('design');
  };

  const handleClickFill = () => {
    setActiveSection('fill');
  };

  const handleClickShare = () => {
    setActiveSection('share');
  };

  const handleClickCreateCard = () => {
    console.log('Estoy en el click');
    callToApi(data).then((response) => setCardResponseFetch(response));
  };

  // /*****END FUNCIONES MANEJADORAS DE EVENTOS*****/

  // /*****FUNCIONALIDADES*****/

  // /*****END FUNCIONALIDADES*****/

  return (
    <div>
      <Header />
      <main className="mainCreate">
        <section className="preview ">
          <div className="preview__align">
            <button className="preview__button" onClick={handleClickReset}>
              <i className="fa-regular fa-trash-can preview__button--can"></i>{' '}
              Reset
            </button>
            <CardPreview data={data} />
          </div>
        </section>
        <form className="container-form" onSubmit={handleSubmit}>
          <Design
            handleInput={handleInput}
            handleClickDesign={handleClickDesign}
            palette={data.palette}
            activeSection={activeSection}> 
            </Design>
          <Fill
            handleInput={handleInput}
            handleClickFill={handleClickFill}
            data={data}
            activeSection={activeSection}
            errorPhone={errorPhone}
            errorEmail={errorEmail}
          />
          <Share
          handleClickCreateCard={handleClickCreateCard}
          handleClickShare={handleClickShare}
          activeSection={activeSection}
          cardResponseFetch={cardResponseFetch}
        

          />
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
