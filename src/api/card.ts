const API_URL = 'http://localhost:3100';

export const applyCard = (number: string, code: string) => {
  const endpoint = `${API_URL}/cards?number=${number}&code=${code}&limit=1`;

  return fetch(endpoint, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => { throw error; });
};
