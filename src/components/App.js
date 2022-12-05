//styles
import '../styles/App.scss';
//images
import profilePhoto from '../images/cat-programming.jpg';
//services
import { useState } from 'react';
import callToApi from '../services/api';
//components
import Landing from './Landing';
import Card from './Card';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

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

  const handleClickReset = () => {
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
    setCardResponseFetch({});
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
    callToApi(data).then((response) => setCardResponseFetch(response));
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>

        <Route
          path="/card"
          element={
            <Card
              handleInput={handleInput}
              handleClickDesign={handleClickDesign}
              palette={data.palette}
              activeSection={activeSection}
              handleClickFill={handleClickFill}
              data={data}
              errorPhone={errorPhone}
              errorEmail={errorEmail}
              handleClickCreateCard={handleClickCreateCard}
              handleClickShare={handleClickShare}
              cardResponseFetch={cardResponseFetch}
              handleClickReset={handleClickReset}></Card>
          }></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
