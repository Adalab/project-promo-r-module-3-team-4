const callToApi = (data) => {
  return fetch('https://dev.adalab.es/api/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())

    .then((response) => {
      if (response.success) {
        return response;
      } else {
        console.log(response.error);
        const errorResponse = {
          success: response.success,
          error: 'Error al enviar los datos. Por favor revisa el formulario.',
        };
        return errorResponse;
      }
    });
};

export default callToApi;
