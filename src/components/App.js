//styles
import '../styles/App.scss';
//images
import flower from '../images/flowers.png'
//import profilePhoto from '../images/cat-programming.jpg';
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
    photo: '',
  });

  const [activeSection, setActiveSection] = useState('design');
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [cardResponseFetch, setCardResponseFetch] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    setData({ ...data, [inputName]: inputValue });
  };

  const handleImage = (imageData) => {
    console.log(imageData);
    setData({ ...data, photo: imageData });
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

  const getLinkedinUser = () => {
    const linkedinArray = data.linkedin.split('/');
    let linkedinUser = data.linkedin;
    const length = linkedinArray.length;
    if (data.linkedin.endsWith('/')) {
      linkedinUser = linkedinArray[length - 2];
    } else {
      linkedinUser = linkedinArray[length - 1];
    }
    return linkedinUser;
  };

  const getGithubUser = () => {
    let githubUser = data.github;
    if (data.github.startsWith('@')) {
      githubUser = data.github.replace('@', '');
    } else if (data.github.includes('/')) {
      const githubArray = data.github.split('/');
      const length = githubArray.length;
      if (data.github.endsWith('/')) {
        githubUser = githubArray[length - 2];
      } else {
        githubUser = githubArray[length - 1];
      }
    }
    return githubUser;
  };

  const handleClickCreateCard = () => {
    const linkedinUser = getLinkedinUser();
    const githubUser = getGithubUser();

    const cleanData = { ...data, linkedin: linkedinUser, github: githubUser };

    setIsLoading(true);

    callToApi(cleanData).then((response) => {
      setCardResponseFetch(response);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>

        <Route
          path="/card"
          element={
            <Card
              handleSubmit={handleSubmit}
              handleInput={handleInput}
              handleImage={handleImage}
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
              handleClickReset={handleClickReset}
              getLinkedinUser={getLinkedinUser}
              getGithubUser={getGithubUser}
              isLoading={isLoading}></Card>
          }></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
