const callToApi = (data) => {
  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())

    .then((cardUrl) => {
      if (cardUrl.success) {
        return cardUrl;
      } else {
        console.log('error sending data');
        return 'Error al enviar los datos. Por favor revisa el formulario.';
      }
    });
};

export default callToApi;
