// API KEY AND URL
const apiKey = process.env.REACT_APP_API_KEY;

export const getWeather = (state) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
  return fetch(apiUrl).then((response) => response.json());
};
