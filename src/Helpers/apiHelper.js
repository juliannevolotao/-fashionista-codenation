const API_URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1";

export const doGetRequest = async (path) => {
  const url = `${API_URL}${path}`;
  let response = await fetch(url);
  response = response.json();

  return response;
};
