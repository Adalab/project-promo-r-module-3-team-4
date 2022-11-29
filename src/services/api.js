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
      return response;
    });
};

export default callToApi;
